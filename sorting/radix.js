function getDigit(num, place) {
  let digit = Math.trunc(Math.abs(num) / 10 ** place) % 10;
  return digit;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  //   return ('' + num).length;   ---same;
}

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentDigits = digitCount(arr[i]);
    maxDigits = Math.max(maxDigits, currentDigits);
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitsCount = mostDigits(nums);
  for (let k = 0; k < maxDigitsCount; k++) {
    //   10 empty arrays:
    let digitBucketsNegative = Array.from({ length: 10 }, () => []);
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // k = positon
      let getBucket = getDigit(nums[i], k);
      // my qick implementation for negative nums
      if (nums[i] < 0) {
        digitBucketsNegative[getBucket].push(nums[i]);
      } else {
        digitBuckets[getBucket].push(nums[i]);
      }
    }
    // my qick implementation for negative nums
    negativeNums = digitBucketsNegative.flat().reverse();
    let newArr2 = [].concat(...digitBuckets);
    nums = negativeNums.concat(newArr2);
  }
  return nums;
}

console.log(radixSort([1, 23, -1455001, -17, 32, 0]));
console.log(radixSort([1, 23, 1455001, 17, 32, 0]));
console.log(radixSort([0]));
console.log(radixSort([]));
