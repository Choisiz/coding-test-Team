const rl =require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on("line",(line)=>{
   const input = line.trim();
   const a = Number(input);
   if(a%4 ==0 && (a%100 !=0 || a%400 ==0)){
    console.log(1);
   }else{
    console.log(0);
   }
   rl.close();
})