const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let input= [];

rl.on('line',(line)=>{
    input.push(line.trim())
}).on('close',(line)=>{
    const [n,x]= input[0].split(' ').map(Number);
    const a = input[1].split(' ').map(Number);
    let result= []
    for(let i=0; i<n; i++){
        if(a[i]<x){
            result.push(a[i])
        }
    }
    console.log(result.join(' '))
})