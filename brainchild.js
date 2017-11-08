const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

module.exports = function (grid) {
  return {
    find: () => {
      let rowResults = [].concat(...grid.map((row, idx) => searchOneRow(row, idx)));
      let columnResults = [...grid[0]]
        .reduce((acc, _, i) => acc.concat(...searchOneColumn(extractColumn(grid, i), i)), []);

      let diagonalLRResults = [];
      let diagonalRLResults = [];
      for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
          diagonalLRResults = diagonalLRResults.concat(searchOneLRDiagonal(extractDiagonal(grid, rowIndex, colIndex), rowIndex, colIndex));
          diagonalRLResults = diagonalRLResults.concat(searchOneRLDiagonal(extractDiagonal(grid, rowIndex, colIndex, RLOnGrid, -1), rowIndex, colIndex));
        }
      }
      let allResults =
        rowResults
          .concat(columnResults)
          .concat(diagonalLRResults)
          .concat(diagonalRLResults);
      let longest = allResults.reduce((acc, letterResult) => Math.max(acc, letterResult.length), 0);

      return dedupe(
        allResults
          .filter(letterResult => letterResult.length === longest)
          .map(letterResult => (({letter, start, end}) => ({letter, start, end}))(letterResult))
      );
    }
  }
};

function extractColumn(grid, colIndex) {
  return grid.map(row => row[colIndex]);
}

const LROnGrid = (row, col, grid) => row < grid.length && col < grid[row].length;
const RLOnGrid = (row, col, grid) => row < grid.length && col >= 0;

function extractDiagonal(grid, row, col, onGrid = LROnGrid, colInc = 1) {
  let extracted = [];
  while (onGrid(row, col, grid)) {
    extracted.push(grid[row][col]);
    row++;
    col += colInc;
  }

  return extracted;
}

function dedupe(arr) {
  let hashes = [];
  return arr.filter(el => {
    let hash = `${el.letter}${el.start.join('')}${el.end.join('')}`;
    if (hashes.includes(hash)) {
      return false;
    }
    hashes.push(hash);
    return true;
  })
}

function searchOneRun(run, coordinateTransformer) {
  let longest = 0;
  return LETTERS
    .filter(letter => run.includes(letter))
    .map(letter => {
      let startIndex = run.indexOf(letter);
      let endIndex = lastIndexOfRun(letter, run, run.indexOf(letter));
      const [start, end] = coordinateTransformer(startIndex, endIndex);
      let length = endIndex - startIndex + 1;
      longest = Math.max(longest, length);
      return {letter, start, end, length};
    })
    .filter(result => result.length >= longest);
}

function searchOneColumn(col, idx) {
  const coordinateTransformer = (idx) => {
    return (startIndex, endIndex) => ([
      [startIndex, idx],
      [endIndex, idx]
    ]);
  };
  return searchOneRun(col, coordinateTransformer(idx));
}


function searchOneRow(row, idx) {
  const coordinateTransformer = (idx) => {
    return (startIndex, endIndex) => ([
      [idx, startIndex],
      [idx, endIndex]
    ])
  };
  return searchOneRun(row, coordinateTransformer(idx));
}

function searchOneLRDiagonal(diagonal, x, y) {
  const coordinateTransformer = (idx) => {
    return (startIndex, endIndex) => ([
      [startIndex + x, startIndex + y],
      [endIndex + x, endIndex + y]
    ])
  };
  return searchOneRun(diagonal, coordinateTransformer(x, y));
}

function searchOneRLDiagonal(diagonal, x, y) {
  const coordinateTransformer = (idx) => {
    return (startIndex, endIndex) => ([
      [startIndex + x, y - startIndex],
      [endIndex + x, y - endIndex]
    ])
  };
  return searchOneRun(diagonal, coordinateTransformer(x, y));
}

function lastIndexOfRun(letter, string, firstIndexOf) {
  for (let i = firstIndexOf; i < string.length; i++) {
    if (string[i] !== letter) {
      return i - 1;
    }
  }
  return --string.length;
}

