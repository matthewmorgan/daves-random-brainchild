const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

module.exports = function (grid) {
  return {
    find: () => {
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


