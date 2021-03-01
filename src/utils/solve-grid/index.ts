import global from 'global'

import { GRID, NUMBERS } from 'typings'

import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * A backtracking function to chekc all possible solution of the given grid
 * @param grid Array of arrays 9x9 grid
 */

function solveGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i += 1) {
    row = Math.floor(i / 9)
    col = i % 9

    if (grid[row][col] === 0) {
      for (let value of numbers) {
        if (!isInRow({ grid, row, value }))
          if (!isInCol({ grid, col, value })) {
            const square = identifySquare({ grid, row, col })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value
              if (checkGrid(grid)) {
                global.counter += 1
                break
              } else if (solveGrid(grid)) return true
            }
          }
      }
      break
    }
  }

  grid[row][col] = 0
}

export default solveGrid
