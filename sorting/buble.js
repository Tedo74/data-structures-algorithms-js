function bubleSort(arr) {
  function swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  let swapped = false;
  let end = arr.length - 1;

  for (let i = end; i >= 0; i--) {
    swapped = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
        swapped = true;
      }
    }
    end--;
  }

  return arr;
}

function bubleOptimized() {}

console.log(bubleSort([21, 3, 18, 2, 1]));
