// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let end = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[end - i]) {
      return false;
    }
    return true;
  }
  //   let reversed = [...str].reverse().join('');
  //   if (reversed === str) {
  //     return true;
  //   }
  //   return false;
}
console.log(palindrome(' abba '));
console.log(palindrome(' abba *'));
