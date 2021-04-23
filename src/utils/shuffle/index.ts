/**
 * Shuffling by using Fishaer Yates shuffle algorithm
 * @param array An array tha need to be shuffled
 */
function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export default shuffle
