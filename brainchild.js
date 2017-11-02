const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

module.exports = function(grid) {
  return {
    find: () => {
      let letterResults = flatten(grid.map(row => searchOneRow(row)));
      let longest = letterResults.reduce((acc, letterResult) => Math.max(acc, letterResult.length), 0);
      return letterResults.filter(letterResult => letterResult.length === longest)
      .map(letterResult => ({letter: letterResult.letter, start: letterResult.start, end: letterResult.end}));
    }
  }
};

function flatten(arr){
  if(Array.isArray(arr)){
    return Array.prototype.concat(...arr);
  }
  return arr;
}

function searchOneRow(row){
  let longest = 0;
  return LETTERS
    .filter(letter => row.includes(letter))
    .map(letter => {
      const [start, end] = [[0, row.indexOf(letter)], [0, lastIndexOfRun(letter, row, row.indexOf(letter))]];
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


