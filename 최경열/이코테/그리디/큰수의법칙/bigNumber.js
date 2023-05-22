const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let currentLine = 0;

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m, k] = input[0].split(" ").map(Number);
  const data = input[1].split(" ").map(Number);

  let result = 0;
  data.sort();

  let first = data[data.length - 1];
  let second = data[data.length - 2];

  while (true) {
    for (let i = 0; i < k; i++) {
      if (m === 0) {
        break;
      }
      result += first;
      m--;
    }
    if (m === 0) {
      break;
    }
    result += second;
    m--;
  }
  console.log(result);
  process.exit();
});
