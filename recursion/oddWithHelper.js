function collectOdds(arr) {
  let results = [];

  function helper(input) {
    if (input.length === 0) {
      return;
    }

    if (input[0] % 2 !== 0) {
      results.push(input[0]);
    }
    helper(input.slice(1));
  }

  helper(arr);
  return results;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
