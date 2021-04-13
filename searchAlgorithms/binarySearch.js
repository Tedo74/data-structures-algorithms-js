function binarySearch(sortedArr, value) {
  let left = 0;
  let right = sortedArr.length - 1;
  //   let mid = Math.trunc((right - left) / 2); my solution
  let mid = Math.trunc((right + left) / 2);
  while (left <= right) {
    // console.log('left: ' + left, right, mid);
    if (sortedArr[mid] === value) {
      return mid;
    } else if (sortedArr[mid] > value) {
      right = mid - 1;
      //   mid = right - Math.trunc((right - left) / 2); my solution
    } else {
      left = mid + 1;
      //   mid = left + Math.trunc((right - left) / 2); my solution
    }
    mid = Math.trunc((right + left) / 2);
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1));
