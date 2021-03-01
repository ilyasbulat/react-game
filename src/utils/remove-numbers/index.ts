import global from 'global'

import { GRID } from 'typings'

import { getRandomIndex, copyGrid, solveGrid } from 'utils'

/**
 * Removes numbers from a full grid to create a Puzzle
 * @param grid 9x9 Sudoku Grid
 * @param attempts number of attempts to solve(higher means more difficult)
 */

function removeNumbers(grid: GRID): GRID {
  let attempts = 5
  switch (global.level) {
    case 'medium':
      attempts = 15
      break
    case 'hard':
      attempts = 25
      break
  }
  console.log(attempts)
  while (attempts > 0) {
    let row = getRandomIndex()
    let col = getRandomIndex()

    while (grid[row][col] === 0) {
      row = getRandomIndex()
      col = getRandomIndex()
    }
    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)
    global.counter = 0
    solveGrid(gridCopy)
    if (global.counter !== 1) {
      grid[row][col] = backup
      attempts -= 1
    }
  }

  return grid
}

export default removeNumbers
