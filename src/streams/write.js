import { createWriteStream } from 'fs';

const write = async () => {
  const writeStream = createWriteStream('src/fs/files/fileToWrite.txt', { flags: 'w', encoding: 'utf8' });

  console.log('Please enter some text to write to file:');

  process.stdin.pipe(writeStream);

  process.stdin.on('end', () => {
    console.log('Input has been written to file successfully.');
  });

  process.stdin.on('error', (err) => {
    console.error('Error reading input:', err.message);
  });
};

await write();