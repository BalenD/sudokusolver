/**
 * converts the given object into a 2 dimensional array
 * @param {object} grid 
 */
function convertToArray(grid) {
    const arr = Object.keys(grid)
    const tempArr = [[]];
    let tempCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 9 === 0 && i !== 0) {
        tempArr.push([]);
        tempCounter++;
      }
      tempArr[tempCounter].push(grid[arr[i]]);
    }
    return tempArr;
  }
  
  /**
   * checks if there is any number (n) repeats horizontally in the 2 dimensional array
   * @param {array} grid 
   * @param {number} y vertical item to st art at
   * @param {number} x horizontal item to start at
   * @param {number} n number to find repetitive for
   */
  function checkHorizontally(grid, y, x, n) {
    for (let i = x; i < 9; i++) {
        if (grid[y][i] == n) {
            return false;
        }
    }
    return true;
  }
  /**
   * checks if there is any number (n) repeats vertically in the 2 dimensional array
   * @param {array} grid 
   * @param {number} y vertical item to st art at
   * @param {number} x horizontal item to start at
   * @param {number} n number to find repetitive for
   */
  function checkVertically(grid, y, x, n) {
    for (let i = y; i < 9; i++) {
        if (grid[i][x] == n) {
            return false;
        }
    }
    return true;
  }

  /**
   * checks if the solved 2 dimensional sudoku array is correct or not
   * @param {array} grid 
   */
  function isCorrect(grid) {
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < 9; x++) {
            if (!checkHorizontally(grid, y, x + 1, grid[y][x])) {
                return false;
            }
            if (!checkVertically(grid, y + 1, x, grid[y][x])) {
                return false;
            }
        }
    }
    return true;
  }

  module.exports = {convertToArray, isCorrect};