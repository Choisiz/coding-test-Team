const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const n = parseInt(input[0]);
  let count = 0;
  for (let x = 0; x <= n; x++) {
    for (let y = 0; y < 60; y++) {
      for (let z = 0; z < 60; z++) {
        if (
          String(x).includes("3") ||
          String(y).includes("3") ||
          String(z).includes("3")
        ) {
          count++;
        }
      }
    }
  }
  console.log(count);
});
