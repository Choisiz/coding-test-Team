const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input= [];

rl.on('line',(line)=>{
    input.push(line.trim())
}).on('close',(line)=>{
    const n = Number(input[0])
    for(let i=1; i<=n; i++){
        const [a,b] =input[i].split(' ').map(Number)
        console.log(a+b);
    }
})