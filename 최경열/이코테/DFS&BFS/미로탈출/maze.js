const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdin,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", (line) => {
  const [n, m] = input[0].split(" ").map(Number);
  const graph = [];
  for (let i = 1; i <= n; i++) {
    graph.push(input[i].split("").map(Number));
  }
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const bfs = (x, y) => {
    const queue = [];
    queue.push([x, y]);
    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx < 0 || ny < 0 || nx >= n || ny >= m) {
          continue;
        }
        if (graph[nx][ny] === 0) {
          continue;
        }
        if (graph[nx][ny] === 1) {
          graph[nx][ny] = graph[x][y] + 1;
          queue.push([nx, ny]);
        }
      }
    }
    return graph[n - 1][m - 1];
  };
  console.log(bfs(0, 0));
});
