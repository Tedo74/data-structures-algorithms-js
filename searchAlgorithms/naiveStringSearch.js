function naiveSearch(longStr, pattern) {
  let result = 0;
  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      //   console.log(longStr[i + j], pattern[j]);
      if (longStr[i + j] !== pattern[j]) {
        // console.log('break');
        break;
      }
      if (j === pattern.length - 1) {
        result++;
        // console.log('found');
      }
    }
  }
  return result;
}

console.log(naiveSearch('loalolsertlol j', 'lol'));
