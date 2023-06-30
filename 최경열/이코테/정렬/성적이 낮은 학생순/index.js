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
    let data = input[i].split(" ");
    arr.push([data[0], parseInt(data[1])]);
  }
  arr.sort((a, b) => parseInt(a[1]) - parseInt(b[1]));
  console.log(arr.map((value) => value[0]).join(" "));
});
