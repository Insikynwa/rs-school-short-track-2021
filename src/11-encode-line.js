/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const strngArray = str.split('');
  let count;
  const newArray = [];

  for (let i = 0; i < strngArray.length; i++) {
    count = 1;
    while (strngArray[i] === strngArray[i + 1]) {
      count++;
      i++;
    }
    if (count > 1) {
      newArray.push(count);
      newArray.push(strngArray[i]);
    } else {
      newArray.push(strngArray[i]);
    }
  }
  return newArray.join('');
}

module.exports = encodeLine;
