const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const row = parseInt(input[0][1]);
  const column = parseInt(input[0][0].charCodeAt(0) - "a".charCodeAt(0) + 1);
  let result = 0;
  const steps = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
  ];

  for (let i = 0; i < steps.length; i++) {
    let next_row = row + steps[i][0];
    let next_column = column + steps[i][1];
    if (
      next_row >= 1 &&
      next_row <= 8 &&
      next_column >= 1 &&
      next_column <= 8
    ) {
      result += 1;
    }
  }
  console.log(result);
});
