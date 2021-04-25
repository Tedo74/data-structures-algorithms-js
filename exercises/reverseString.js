// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // solution 1
    // let returnStr=""
    // for (let i=str.length-1; i >= 0; i--){
    //     returnStr += str[i];
    // }
    // return returnStr;

    // solution 2
    // return [...str].reverse().join('');

    // solution 3 - reduce!
    return str.split('').reduce((acc, curr)=>acc=curr+acc,'');

}
console.log(reverse("abc   *"));
