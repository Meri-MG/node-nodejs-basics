import fs from 'node:fs'
const filePath = './src/fs/files/fileToRemove.txt'


const remove = async () => {
    if (!fs.existsSync(filePath)) throw new Error('FS operation failed')
    
    fs.unlink(filePath, (err) => {
        if (err) {
          console.error(`Error removing file: ${err}`);
          return;
        }
      
        console.log(`File ${filePath} has been successfully removed.`);
    });
}

await remove();