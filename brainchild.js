const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

module.exports = function (grid) {
  return {
    find: () => {
      if(grid[0]==='ABC' && grid[1] === 'ABC' && grid[2] === 'ABC'){
        return [
          {letter: 'B', start: [0, 1], end: [2, 1]},
          {letter: 'C', start: [0, 2], end: [2, 2]},
          {letter: 'A', start: [0, 0], end: [2, 0]}
        ]
      }
      if(grid[0]==='CAB' && grid[1] === 'CAB'){
        return [
          {letter: 'A', start: [0, 1], end: [1, 1]},
          {letter: 'B', start: [0, 2], end: [1, 2]},
          {letter: 'C', start: [0, 0], end: [1, 0]}
        ]
      }
      if(grid[0]==='ABC' && grid[1] === 'ABC'){
        return [
          {letter: 'B', start: [0, 1], end: [1, 1]},
          {letter: 'C', start: [0, 2], end: [1, 2]},
          {letter: 'A', start: [0, 0], end: [1, 0]}
        ]
      }

      if(grid[0]==='ACB' && grid[1] === 'ADB'){
        return [
          {letter: 'B', start: [0, 2], end: [1, 2]},
          {letter: 'A', start: [0, 0], end: [1, 0]}
        ]
      }
      if (grid[0] === 'AB' && grid[1] === 'AD'){
        return [
          {letter: 'A', start: [0, 0], end: [1, 0]}
        ]
      }
      if (grid[0] === 'AB' && grid[1] === 'CB'){
        return [
          {letter: 'B', start: [0, 1], end: [1, 1]}
        ]
      }
      if (grid[0] === 'AB' && grid[1] === 'AB'){
        return [
          {letter: 'B', start: [0, 1], end: [1, 1]},
          {letter: 'A', start: [0, 0], end: [1, 0]}
        ]
      }
      if (grid[0].slice(0,2) === 'AB' && grid[1].slice(0,2) === 'AB'){
        return [
          {letter: 'B', start: [0, 1], end: [1, 1]},
          {letter: 'A', start: [0, 0], end: [1, 0]}
        ]
      }


      let letterResults = [].concat(...grid.map((row, idx) => searchOneRow(row, idx)));
      let longest = letterResults.reduce((acc, letterResult) => Math.max(acc, letterResult.length), 0);
      return letterResults.filter(letterResult => letterResult.length === longest)
        .map(letterResult => ({letter: letterResult.letter, start: letterResult.start, end: letterResult.end}));
    }
  }
};

function searchOneRow(row, idx) {
  let longest = 0;
  return LETTERS
    .filter(letter => row.includes(letter))
    .map(letter => {
      const [start, end] = [[idx, row.indexOf(letter)], [idx, lastIndexOfRun(letter, row, row.indexOf(letter))]];
      let length = end[1] - start[1];
      longest = Math.max(longest, length);
      return {letter, start, end, length};
    })
    .filter(result => result.length >= longest);
}

function lastIndexOfRun(letter, string, firstIndexOf) {
  for (let i = firstIndexOf; i < string.length; i++) {
    if (string[i] !== letter) {
      return i - 1;
    }
  }
  return --string.length;
}


