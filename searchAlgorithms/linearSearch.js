function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (current === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([], 5));
