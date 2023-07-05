const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, k] = input[0].split(" ").map(Number);
  const a = input[1].split(" ").map(Number);
  const b = input[2].split(" ").map(Number);

  a.sort((x, y) => x - y);
  b.sort((x, y) => y - x);

  for (let i = 0; i < k; i++) {
    if (a[i] < b[i]) {
      [a[i], b[i]] = [b[i], a[i]];
    } else {
      break;
    }
  }
  const sumA = a.reduce((acc, val) => acc + val, 0);
  console.log(sumA);
});
