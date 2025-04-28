import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.resolve('src/hash/files/fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  stream.on('data', (chunk) => {
    hash.update(chunk);
  });

  stream.on('end', () => {
    const result = hash.digest('hex');
    console.log(result);
  });

  stream.on('error', (err) => {
    console.error('Error reading file:', err.message);
  });
};

await calculateHash();
