const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = parseInt(input[0]);
  const data = input[1].split(" ");
  let x = 1;
  let y = 1;
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const move_type = ["L", "R", "U", "D"];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < move_type.length; j++) {
      if (data[i] == move_type[j]) {
        nx = x + dx[j];
        ny = y + dy[j];
      }
    }
    if (nx < 1 || ny < 1 || nx > n || ny > n) {
      continue;
    }
    x = nx;
    y = ny;
  }
  console.log(x, y);
});
