// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  if (!str) {
    return 'empty';
  }
  const chars = {};
  for (const letter of str) {
    if (chars[letter]) {
      chars[letter]++;
      continue;
    } else {
      chars[letter] = 1;
    }
  }
  let entries = Object.entries(chars);
  entries.sort((a, b) => {
    return b[1] - a[1];
  });
  return entries[0][0];
}

console.log(maxChar('asdfrewqa'));
