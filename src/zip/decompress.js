import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const decompress = async () => {
    const inputFilePath = 'src/zip/files/archive.gz';
    const outputFilePath = 'src/zip/files/fileToCompress.txt';
  
    const inputStream = createReadStream(inputFilePath);
    const outputStream = createWriteStream(outputFilePath);
    const gunzipStream = createGunzip();
  
    inputStream.pipe(gunzipStream).pipe(outputStream);
  
    outputStream.on('finish', () => {
      console.log('File has been decompressed successfully to fileToCompress.txt');
    });
  
    inputStream.on('error', (err) => {
      console.error('Error reading the compressed file:', err.message);
    });
  
    outputStream.on('error', (err) => {
      console.error('Error writing the decompressed file:', err.message);
    });
};

await decompress();