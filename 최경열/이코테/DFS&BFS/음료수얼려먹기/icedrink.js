const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = [];
  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split("").map(Number));
  }
  let result = 0;
  const dfs = (x, y) => {
    if (x <= -1 || x >= n || y <= -1 || y >= m) {
      return false;
    }
    if (graph[x][y] == 0) {
      graph[x][y] = 1;
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
      return true;
    }
    return false;
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(i, j) === true) {
        result += 1;
      }
    }
  }

  console.log(result);
});
