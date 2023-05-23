const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  let [n, k] = input[0].split(" ").map(Number);
  let result = 0;

  while (n >= k) {
    while (n % k !== 0) {
      n += 1;
      result += 1;
    }
    n /= k;
    result += 1;
  }

  while (n > 1) {
    n -= 1;
    result += 1;
  }

  console.log(result);
  rl.close();
});
