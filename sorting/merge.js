// O (n log n)

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

function mergeSort(arr) {
  // base case
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  //   console.log(leftArr, rightArr, arr);
  let left = mergeSort(leftArr);
  let right = mergeSort(rightArr);
  return merge(left, right);
}
// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([1, 10, 50, 1, 123, 435, 21, 77, 88, 101]));
