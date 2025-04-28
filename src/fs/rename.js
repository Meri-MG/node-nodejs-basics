import fs from 'node:fs'
import path from 'node:path'

const src = './src/fs/files/'

const rename = async () => {
    const wrongPath = path.join(src, 'wrongFilename.txt');
    const correctPath = path.join(src, 'properFilename.md');

    if (!fs.existsSync(wrongPath)) {
        throw new Error('FS operation failed');
    }

    if (fs.existsSync(correctPath)) {
        throw new Error('FS operation failed');
    }

    fs.rename(wrongPath, correctPath, (err) => {
        if (err) throw new Error('FS operation failed');
    })
};

await rename();
