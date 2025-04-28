import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const inputFilePath = 'src/zip/files/fileToCompress.txt';
    const outputFilePath = 'src/zip/files/archive.gz';
  
    const inputStream = createReadStream(inputFilePath);
  
    const outputStream = createWriteStream(outputFilePath);
  
    const gzipStream = createGzip();
  
    inputStream.pipe(gzipStream).pipe(outputStream);
  
    outputStream.on('finish', () => {
      console.log('File has been compressed successfully to archive.gz');
    });
  
    inputStream.on('error', (err) => {
      console.error('Error reading the file:', err.message);
    });
  
    outputStream.on('error', (err) => {
      console.error('Error writing the compressed file:', err.message);
    });
};

await compress();
