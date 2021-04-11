/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultMatrix = matrix.map((row, index, array) => {
    const resultRow = row.map((element, ei) => {
      let count = 0;
      if (element) count += 1; // current elem
      if (array[index][ei + 1]) count += 1; // next elem
      if (ei > 0 && array[index][ei - 1]) count += 1; // back elem
      if (index > 0 && array[index - 1][ei]) count += 1; // up elem
      if (index < array.length - 1 && array[index + 1][ei]) count += 1; // down elem
      if (ei > 0 && index < array.length - 1 && array[index + 1][ei - 1]) count += 1;
      if (index > 0 && array[index - 1][ei + 1]) count += 1;
      if (index > 0 && ei > 0 && !element && array[index - 1][ei - 1]) count += 1;
      if (
        index < array.length - 1
              && !element
              && array[index + 1][ei + 1]
      ) count += 1;
      return count;
    });
    return resultRow;
  });
  return resultMatrix;
}

module.exports = minesweeper;
