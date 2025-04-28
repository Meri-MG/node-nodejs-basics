import fs from 'node:fs'
import path from 'node:path'
const destination = './src/fs/files-copy/'
const src = './src/fs/files/'

const copy = async () => {

    if (!fs.existsSync(src)) {
      throw new Error('FS operation failed');
    }
    
    if (fs.existsSync(destination)) {
      throw new Error('FS operation failed');
    }

    copyFolderSync(src, destination);
}

function copyFolderSync(source, destination) {
  fs.mkdirSync(destination, { recursive: true });

  const entries = fs.readdirSync(source, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(source, entry.name);
    const destPath = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      copyFolderSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

await copy();
