import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) =>{
    const n = parseInt(size);
    for(let j = 0; j < n; j++){
        let line = '';
        for(let i = 0; i < n; i++){
            line += (j >= i) ? '*':' ';
        }
        console.log(line);
    }
    rl.close();
})