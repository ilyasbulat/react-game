import axios from 'axios'
import { AnyAction } from 'redux'

import { copyGrid, createFullGrid, removeNumbers } from 'utils'
import compareArrays from 'utils/compare-arrays'

import { IReducer } from './interfaces'
import * as types from './types'
import global from 'global'
const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const gridCopy = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(gridCopy)
      const workingGrid = copyGrid(challengeGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      }
    case types.FILL_BLOCK:
      const [row, col] = action.coords
      if (state.workingGrid && state.solvedGrid) {
        if (state.solvedGrid[row][col] !== action.value) {
          alert('Incorrect option')
          return state
        }
        state.workingGrid[row][col] = action.value
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert('Completed!')
          axios.post('https://react-game-sudoku.herokuapp.com/stats', {
            difficult: global.level,
            time: global.time,
          })
        }
        return { ...state, workingGrid: [...state.workingGrid] }
      }
      return state
    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }
    default:
      return state
  }
}

export default reducer
