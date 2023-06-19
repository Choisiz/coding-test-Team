const arr = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

function quick_sort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let pivot = start;
  let left = start + 1;
  let right = end;
  while (left <= right) {
    while (left <= end && arr[left] <= arr[pivot]) {
      left += 1;
    }
    while (right > start && arr[right] >= arr[pivot]) {
      right -= 1;
    }
    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  quick_sort(arr, start, right - 1);
  quick_sort(arr, right + 1, end);
}

quick_sort(arr, 0, arr.length - 1);
console.log(arr);
