const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const assetsDir = path.join(__dirname, 'public', 'assets');
const srcDir = path.join(__dirname, 'src');

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const allAssets = getAllFiles(assetsDir);
const unusedAssets = [];

for (const asset of allAssets) {
  const baseName = path.basename(asset, path.extname(asset));
  // ignore .DS_Store
  if (baseName === '.DS_Store' || baseName === '') continue;
  
  // Try to find the baseName in the src directory
  try {
    // using grep to search for the baseName in srcDir
    // We escape single quotes in baseName if any
    const searchName = baseName.replace(/'/g, "'\\''");
    execSync(`grep -rnF "${searchName}" "${srcDir}"`, { stdio: 'ignore' });
  } catch (e) {
    // grep returns non-zero if not found
    unusedAssets.push(asset);
  }
}

console.log(`Found ${unusedAssets.length} unused assets out of ${allAssets.length}.`);
fs.writeFileSync('unused_assets.txt', unusedAssets.join('\n'));
