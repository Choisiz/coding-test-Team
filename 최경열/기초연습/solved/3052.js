const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let arr = [];
rl.on("line",(line)=>{
    arr.push(Number(line.trim()));
    if(arr.length===10){
        rl.close()
    }
}).on('close',()=>{
  let values = arr.map(v => v % 42);
  let result = new Set(values);
  console.log(result.size)
  process.exit();
})