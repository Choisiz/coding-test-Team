const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
    const input =line.trim().split(' ');
    const a = Number(input[0]);
    let result = '';
    for(let i=1; i<=a+1; i++){
        for(let j=1; j<=i; j++){
            result += '*';
        }
        result += '\n';
    }
    console.log(result);
    rl.close();
});