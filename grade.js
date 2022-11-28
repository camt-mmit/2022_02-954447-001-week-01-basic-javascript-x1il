import * as readline from 'readline';

const rl = readline.createInterface(process.stdin, process.stdout);
let grade = '';

rl.question('Input your scors: ', (scors) => {
    if (scors >= 80) {
        grade = "A";
    }
    else if(scors >= 70){
        grade = "B"
    }
    else if(scors >= 60){
        grade = "C"
    }
    else if(scors >= 50){
        grade = "D"
    }
    else{
        grade = "F"
    }
    console.log(`Your grade is: ${grade}.`);
    rl.close();

})