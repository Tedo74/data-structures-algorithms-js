function bubleSort(arr) {
  let swapped;
  for (let i = arr.length; i >= 0; i--) {
    swapped = false;

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
    }
    if (!swapped) {
      return arr;
    }
  }

  return arr;
}

console.log(bubleSort([1, 5, 2, 8, 3, 9, 10]));
