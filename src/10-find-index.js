/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
 function findIndex(array, value) {
  let start = 0;
  let end = array.length-1;
  let pivot = 0;

  do {
    pivot = Math.floor((start + end) / 2);
 if (value < array[pivot]) {
      end = pivot;
      pivot = start;
    } 
    if (value > array[pivot]){
      start = pivot;
    }
  } while (array[pivot] !== value);

  return pivot;
}

module.exports = findIndex;
