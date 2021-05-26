function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const letters = {};
  for (const currentChar of str1) {
    // letters[currentChar] = (letters[currentChar] || 0) + 1;
    letters[currentChar]
      ? (letters[currentChar] += 1)
      : (letters[currentChar] = 1);
  }
  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i];
    if (!letters[ch]) {
      return false;
    } else {
      letters[ch] -= 1;
    }
  }
  return true;
}

console.log(isAnagram('hisz', 'ihzs'));
console.log(isAnagram('aaz', 'zza'));
console.log(isAnagram('', ' '));
console.log(isAnagram('', ''));
console.log(isAnagram('awesome', 'awesom'));
