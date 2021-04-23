import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}

/**
 * This function check if number is in the column of grid and return boolean
 * @param input  9x9 grid with col index and value
 */

function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === value) {
      return true
    }
  }
  return false
}

export default isInCol
