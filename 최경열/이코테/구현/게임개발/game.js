const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  //맵좌표
  const [n, m] = input[0].split(" ").map((value) => parseInt(value));
  //캐릭터이동위치저장
  const d = new Array(n).fill(0).map(() => new Array(m).fill(0));
  //캐릭터 위치좌표,방향
  let [x, y, dire] = input[1].split(" ").map((value) => parseInt(value));
  //현재캐릭터위치저장
  d[x][y] = 1;
  //전체맵정보
  const array = [];
  for (let i = 2; i < n + 2; i++) {
    array.push(input[i].split(" ").map((x) => parseInt(x)));
  }
  //북,동.남,서
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  //방향회전함수
  function turn_left() {
    dire -= 1;
    if (dire < 0) {
      dire = 3;
    }
  }

  //방문회수
  let count = 1;
  //회전횟수
  let turn_time = 0;

  while (true) {
    turn_left();
    let nx = x + dx[dire];
    let ny = y + dy[dire];
    if (d[nx][ny] === 0 && array[nx][ny] === 0) {
      x = nx;
      y = ny;
      count += 1;
      turn_time = 0;
      continue;
    } else {
      turn_time += 1;
    }
    if (turn_time === 4) {
      let nx = x - dx[dire];
      let ny = y - dy[dire];
      if (array[nx][ny] === 0) {
        x = nx;
        y = ny;
      } else {
        break;
      }
      turn_time = 0;
    }
  }
  console.log(count);
});
