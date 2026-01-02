const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  // 입력을 받아서 공백으로 분리
  const input = line.trim().split(' ');
  const a = Number(input[0]);
  const b = Number(input[1]);
  
  // 결과 출력
  console.log(a - b);
  
  // 입력 종료
  rl.close();
});