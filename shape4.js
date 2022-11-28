import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Input size: ', (size) =>{
    const n = parseInt(size);
    const fn = 2*n - 1;
    for(let j = 0; j < fn; j++){
        let line = '';
        for(let i = 0; i < fn; i++){
            line += (
               (i + j + n - 1) % (fn - 1) == 0 ||
               (i - j + n - 1) % (fn - 1) == 0
            ) ? '*':' ';
            
        }
        console.log(line);
    }
    rl.close();
})