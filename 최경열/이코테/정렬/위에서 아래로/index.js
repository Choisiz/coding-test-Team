const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = parseInt(input[0]);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(parseInt(input[i]));
  }

  arr.sort((a, b) => b - a);

  console.log(arr.join(" "));
});
