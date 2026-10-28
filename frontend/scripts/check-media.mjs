import { readdir, open } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../public/", import.meta.url));
const pointers = [];
const unreadable = [];
async function inspect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) await inspect(path);
    else if (entry.isFile() && /\.(webm|mp4|mov|webp|png|jpe?g|pdf)$/i.test(entry.name)) {
      let file;
      try {
        file = await open(path, "r");
        const bytes = Buffer.alloc(128);
        const { bytesRead } = await file.read(bytes, 0, 128, 0);
        if (bytes.subarray(0, bytesRead).toString("utf8").startsWith("version https://git-lfs.github.com/spec/v1")) pointers.push(path);
      } catch (error) {
        unreadable.push(`${path} (${error.code || error.message})`);
      } finally { await file?.close(); }
    }
  }
}
await inspect(root);
if (unreadable.length) throw new Error(`Public media cannot be read. Restore read access before deployment:\n${unreadable.join("\n")}`);
if (pointers.length) throw new Error(`Git LFS media has not been downloaded. Run git lfs pull before building:\n${pointers.join("\n")}`);
console.log("Media preflight passed: no Git LFS pointer files in public assets.");
