import fs from 'node:fs'
const src = './src/fs/files/'

const list = async () => {
    if (!fs.existsSync(src)) {
        throw new Error('FS operation failed');
    }
    listFiles(src) 
};

function listFiles(source) {
  const entries = fs.readdirSync(source);

  console.log(entries)
}

await list();