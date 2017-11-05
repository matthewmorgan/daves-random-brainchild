const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

module.exports = function (grid) {
  return {
    find: () => {
      let rowResults = [].concat(...grid.map((row, idx) => searchOneRow(row, idx)));
      let columnResults = [...grid[0]]
        .reduce((acc, _, i) => acc.concat(...searchOneColumn(extractColumn(grid, i), i)), []);

      let diagonalLRResults = [];
      for (let rowIndex = 0; rowIndex <  grid.length; rowIndex++){
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++){
          diagonalLRResults = diagonalLRResults.concat(searchOneLRDiagonal(extractLRDiagonal(grid, rowIndex, colIndex), rowIndex, colIndex));
        }
      }
      let allResults = rowResults.concat(columnResults);
      allResults=allResults.concat(diagonalLRResults);
      let longest = allResults.reduce((acc, letterResult) => Math.max(acc, letterResult.length), 0);
      return dedupe(
        allResults
        .filter(letterResult => letterResult.length === longest)
          .map(letterResult => ({letter: letterResult.letter, start: letterResult.start, end: letterResult.end}))
      );
    }
  }
};

function extractColumn(grid, colIndex){
  return grid.map(row => row[colIndex]);
}

function searchOneLRDiagonal(diagonal, x, y) {
  let longest = 0;
  return LETTERS
    .filter(letter => diagonal.includes(letter))
    .map(letter => {
      let start = diagonal.indexOf(letter);
      let end = lastIndexOfRun(letter, diagonal, start);
      let length = end - start + 1;  
      longest = Math.max(longest, length);
      let startArray = [start + x, start+y];
      let endArray = [end + x, end+y];
      return {letter, start: startArray, end: endArray, length};
    })
    .filter(result => result.length && result.length >= longest);
}

function extractLRDiagonal(grid, x, y){
  let extracted = [];
  let row = x;
  let col = y;
  while (row < grid.length && col < grid[row].length){
    extracted.push(grid[row][col]);
    row++;
    col++;    
  }

  return extracted;
}

function dedupe(arr){
  let set = [];
  return arr.filter(el => {
    let hash = `${el.letter}${el.start.join('')}${el.end.join('')}`;
    if (set.indexOf(hash)=== -1){
      set.push(hash);
      return true;
    }
    return false;
  })
}

function searchOneColumn(col, idx) {
  let longest = 0;
  return LETTERS
    .filter(letter => col.includes(letter))
    .map(letter => {
      const [start, end] = [[col.indexOf(letter), idx], [lastIndexOfRun(letter, col, col.indexOf(letter)), idx]];
      let length = end[0] - start[0] + 1;
      longest = Math.max(longest, length);
      return {letter, start, end, length};
    })
    .filter(result => result.length >= longest);
}

function searchOneRow(row, idx) {
  let longest = 0;
  return LETTERS
    .filter(letter => row.includes(letter))
    .map(letter => {
      const [start, end] = [[idx, row.indexOf(letter)], [idx, lastIndexOfRun(letter, row, row.indexOf(letter))]];
      let length = end[1] - start[1] + 1;
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


