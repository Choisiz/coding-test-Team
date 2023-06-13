const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
  ];
  const visited = Array(9).fill(false);
  const bfs = (graph, start, visited) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const v = queue.shift();
      console.log(v, (end = " "));
      for (let i of graph[v]) {
        if (!visited[i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  };
  bfs(graph, 1, visited);
});
