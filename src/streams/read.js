import { createReadStream } from 'fs';

const read = async () => {
  const stream = createReadStream('src/streams/files/fileToRead.txt');

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on('end', () => {
    console.log('\nFile read successfully.');
  });

  stream.on('error', (err) => {
    console.error('Error reading the file:', err.message);
  });
};

await read();
