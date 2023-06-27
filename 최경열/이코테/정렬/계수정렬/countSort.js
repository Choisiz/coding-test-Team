const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

const count = new Array(Math.max(...arr) + 1).fill(0);

for (let i = 0; i < arr.length; i++) {
  count[arr[i]] += 1;
}

for (let i = 0; i < count.length; i++) {
  for (let j = 0; j < count[i]; j++) {
    process.stdout.write(i + " ");
  }
}
