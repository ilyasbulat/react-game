import { GRID } from 'typings'

/**
 * Function return true if all сells are filled with numbers and false otherwise
 * @param grid 9x9 grid filled with numbers
 */

function checkGrid(grid: GRID): boolean {
  for (let i = 0; i < 9; i++)
    for (let j = 0; j < 9; j++) {
      if (grid[i][j] === 0) return false
    }

  return true
}

export default checkGrid
