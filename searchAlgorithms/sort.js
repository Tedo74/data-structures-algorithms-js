const arr = [7, 50, 5, 3, 21, 188, 1024];
console.log(
  arr.sort((a, b) => {
    if (a > b) {
      // change
      return 1;
    } else if (b > a) {
      // no change
      return -1;
    } else {
      // no change
      return 0;
    }
  })
);
