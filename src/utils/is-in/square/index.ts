import { SQUARE, NUMBERS } from 'typings'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

/**
 * Return true if value is in the grid square
 * @param input square 3x3, value: number
 */

function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
