const { NotImplementedError } = require('../lib');

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
  const result = [];
  const columns = matrix[0].length;
  const rows = matrix.length;

  for (let i = 0; i < rows; i += 1) {
    const newRow = [];
    for (let j = 0; j < columns; j += 1) {
      let count = 0;

      for (let row = i - 1; row <= i + 1; row += 1) {
        for (let col = j - 1; col <= j + 1; col += 1) {
          if (row === i && col === j) {
            continue;
          }
          if (
            row >= 0 &&
            row < rows &&
            col >= 0 &&
            col < columns
          ) {
            if (matrix[row][col] === true) {
              count += 1;
            }
          }
        }
      }
      newRow.push(count);
    }
    result.push(newRow);
  }
  return result;
}

module.exports = {
  minesweeper
};
