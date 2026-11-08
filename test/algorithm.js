// sorting algorithms
const arr = [2, 4, 7, 5, 6, 1, 3];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      //   console.log(arr)
    }
  }
  return arr;
}

// bubbleSort(arr);
// console.log(arr);

// binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr2, 4));
