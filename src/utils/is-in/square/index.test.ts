import { NUMBERS, SQUARE } from 'typings'

import isInSquare from './'

describe('isInSquare', () => {
  it('Returns true if value is in grid square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]

    expect(isInSquare({ square, value: 6 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('Returns false if value is not in grid square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [4, 5, 0],
      [7, 8, 0],
    ]

    expect(isInSquare({ square, value: 6 })).toBeFalsy()
    expect(isInSquare({ square, value: 9 })).toBeFalsy()
  })
})
