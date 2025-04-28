import { Transform } from 'stream';

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    const reversed = chunk.toString().split('').reverse().join('');
    this.push(reversed);
    callback();
  }
});

const transform = async () => {
  console.log('Please enter text to reverse (Ctrl+C to end):');

  process.stdin.pipe(transformStream).pipe(process.stdout);

  process.stdin.on('end', () => {
    console.log('\nText has been reversed and written to stdout.');
  });

  process.stdin.on('error', (err) => {
    console.error('Error reading input:', err.message);
  });
};

await transform();