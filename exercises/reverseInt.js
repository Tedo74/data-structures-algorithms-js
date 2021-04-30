// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// *********** Strings are not allowed! *******************
function reverseInt(n) {
  let isNegative = true;
  if (n >= 0) {
    isNegative = false;
  }
  n = Math.abs(n);
  let remainingNum = n;
  let reversedArr = [];
  while (remainingNum > 0) {
    let reminder = remainingNum % 10;
    remainingNum = Math.trunc(remainingNum / 10);
    reversedArr.push(reminder);
  }
  let numHelper = 1;
  let result = 0;
  for (let i = reversedArr.length - 1; i >= 0; i--) {
    let revNum = reversedArr[i] * numHelper;
    result = revNum + result;
    numHelper *= 10;
  }
  if (isNegative) {
    return result * -1;
  }
  return result;
}
console.log(reverseInt(12345));
console.log(reverseInt(-123));
console.log(reverseInt(0));
