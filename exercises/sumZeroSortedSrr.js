// two pointers
// find first pair in sorted array where sum = 0

function findZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log(findZero([-78, -15, 0, 4, 15, 23, 70]));
