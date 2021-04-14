function pivot(arr, start = 0, end = arr.length - 1) {
  // swap elements
  function swap(arr, el1Index, el2Index) {
    let temp = arr[el1Index];
    arr[el1Index] = arr[el2Index];
    arr[el2Index] = temp;
  }
  // point to first element in array
  let pivot = arr[start];
  //   where to swap
  let swapIndex = start;
  // compare
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //   left side
    quickSort(arr, left, pivotIndex - 1);
    //   right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([22, 13, 43, 5, 1, 0]));
