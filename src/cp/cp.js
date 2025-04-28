import { spawn } from 'child_process';

const spawnChildProcess = (args) => {
    const child = spawn('node', ['script.js', ...args]);

    process.stdin.pipe(child.stdin);

    child.stdout.pipe(process.stdout);

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });

    child.on('error', (err) => {
        console.error(`Failed to start child process: ${err.message}`);
    });
};

spawnChildProcess(['arg1', 'arg2']);
