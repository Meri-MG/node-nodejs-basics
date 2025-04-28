import fs from 'node:fs'
const filePath = './src/fs/files/fileToRead.txt'

const read = async () => {
    if (!fs.existsSync(filePath)) throw new Error('FS operation failed')
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(data);
      });
};

await read();