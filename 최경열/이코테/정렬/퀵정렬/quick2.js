//es5
var arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[0];
  var tail = arr.slice(1);
  var leftSide = tail.filter((x) => x <= pivot);
  var rightSide = tail.filter((x) => x >= pivot);

  return quickSort(leftSide).concat(pivot, quickSort(rightSide));
}
console.log(quickSort(arr));

//es6
const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];
const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const tail = arr.slice(1);
  const leftSide = tail.filter((x) => x <= pivot);
  const rightSide = tail.filter((x) => x > pivot);

  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
};

console.log(quickSort(arr));
