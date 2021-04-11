/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const newArray = String(n).split('');
  const minNumber = Math.min(...newArray);
  const indexMinNumber = newArray.indexOf(String(minNumber));
  newArray.splice(indexMinNumber, 1);
  const newNumber = newArray.join('');
  return +newNumber;
}

module.exports = deleteDigit;
