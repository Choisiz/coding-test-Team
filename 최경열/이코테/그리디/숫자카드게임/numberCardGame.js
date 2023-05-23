const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let data = input[i].split(" ").map(Number);
    let min_value = Math.min(...data);
    result = Math.max(result, min_value);
  }
  console.log(result);
  process.exit();
});
