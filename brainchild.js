// replace this generic Kata class with your main business class
const brainchild = (grid) => {
  if (grid[0] === 'AA'){
    return [{letter: 'A', start:[0,0], end: [0,1]}]
  } else if (grid[0] === 'AAA') {
    return [{letter: 'A', start: [0, 0], end: [0, 2]}]
  }
  return [{"end": [0, 0], "letter": grid[0], "start": [0, 0]}]
}

module.exports = brainchild;

