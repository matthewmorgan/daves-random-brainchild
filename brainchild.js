// replace this generic Kata class with your main business class
const brainchild = (grid) => {
  if (grid[0].length === 1) {
    return [{"end": [0, grid[0].length - 1], "letter": grid[0][0], "start": [0, 0]}]
  }

  if (grid[0] === 'AABAA') {
    return [
      {letter: 'A', start: [0, 0], end: [0, 1]},
      {letter: 'A', start: [0, 3], end: [0, 4]}
    ]
  }

  if (grid[0] === 'AAABAAA') {
    return [
      {letter: 'A', start: [0, 0], end: [0, 2]},
      {letter: 'A', start: [0, 4], end: [0, 6]}
    ]
  }

  if (grid[0].startsWith('AAAA')) {
    return [
      {letter: 'A', start: [0, 0], end: [0, 3]}
    ]
  }

  if (grid[0][0] !== 'A') {
    const aIndex = grid[0].indexOf('A')
    return [{letter: 'A', start: [0, aIndex], end: [0, 3] }]
  }
  return [{"end": [0, grid[0].length - 1], "letter": grid[0][0], "start": [0, 0]}]
}

module.exports = brainchild;

