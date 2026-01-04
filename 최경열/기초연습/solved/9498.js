const rl = require('readline').createInterface({
    input:process.stdin,
    output: process.stdout
})

rl.on('line',(line)=>{
    const input = line.trim()
    const a = Number(input)
    if(a<=100 && a>=90){
        console.log('A')
    }else if(a<=89 && a>=80){
        console.log('B')
    }else if(a<=79 && a>=70){
        console.log('C')
    }else if(a<=69 && a>=60){
        console.log('D')
    }else{
        console.log('F')
    }
    rl.close()
})