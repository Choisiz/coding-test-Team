const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(line)=>{
    const input = line.trim()
    const a = Number(input)
    for(let i=1; i<=a; i++){
        console.log(i)
    }
    rl.close();
})