import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { EVENT_ALBUMS, EVENT_PHOTO_SECTIONS, getEventAlbum } from "../src/data/eventGalleryData.js";
import { PHOTO_PREVIEW_COPY } from "../src/data/photoPreviewCopy.js";
import { recentVideos, founderVideo, messVideo } from "../src/data/recentVideos.js";

const publicRoot = fileURLToPath(new URL("../public/", import.meta.url));
function checkAsset(src) {
  assert(src?.startsWith("/assets/") && !src.includes(".."), `Invalid asset path: ${src}`);
  assert(existsSync(resolve(publicRoot, `.${src}`)), `Missing gallery asset: ${src}`);
}
assert.equal(new Set(EVENT_ALBUMS.map((album) => album.id)).size, EVENT_ALBUMS.length, "Duplicate album slugs");
assert.equal(new Set(EVENT_PHOTO_SECTIONS.map((section) => section.id)).size, EVENT_PHOTO_SECTIONS.length, "Duplicate photo sections");
for (const album of EVENT_ALBUMS) {
  assert(album.photos.length > 0, `Empty album: ${album.id}`);
  checkAsset(album.hero);
  assert(album.photos.includes(album.hero), `Cover is outside its album: ${album.id}`);
  for (const src of album.photos) checkAsset(src);
  const posters = new Set();
  for (const clip of album.videoClips || []) {
    checkAsset(clip.src); checkAsset(clip.poster);
    assert(clip.width > 0 && clip.height > 0, `Missing video ratio: ${clip.src}`);
    assert(!posters.has(clip.poster), `Repeated video thumbnail: ${album.id}`);
    posters.add(clip.poster);
  }
}
for (const section of EVENT_PHOTO_SECTIONS) {
  const album = getEventAlbum(section.albumId || section.id);
  assert(album, `Broken photo album link: ${section.id}`);
  const titles = new Set(); const images = new Set();
  for (const photo of section.photos) {
    assert(album.photos.includes(photo.image), `Preview from wrong album: ${section.id}`);
    assert(PHOTO_PREVIEW_COPY[photo.image], `Missing image-specific caption: ${photo.image}`);
    assert(photo.title && photo.caption && photo.title !== photo.caption, `Incomplete preview copy: ${photo.image}`);
    assert(!titles.has(photo.title) && !images.has(photo.image), `Repeated preview: ${section.id}`);
    titles.add(photo.title); images.add(photo.image);
  }
}
for (const clip of [...recentVideos, founderVideo, messVideo]) {
  checkAsset(clip.src); checkAsset(clip.poster);
  assert(clip.width > 0 && clip.height > 0, `Missing video ratio: ${clip.src}`);
}
assert.equal(getEventAlbum("cricket-outdoor-sports")?.id, "sports", "Old cricket links must resolve to the merged album");
console.log(`Gallery checks passed: ${EVENT_ALBUMS.length} albums, ${EVENT_PHOTO_SECTIONS.length} photo sections, album links, image captions, video posters and aspect ratios.`);
