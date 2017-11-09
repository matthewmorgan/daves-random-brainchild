const LETTERS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

module.exports = function (grid) {
  return {
    find: () => {
      let rowResults = [...grid].map((row, idx) => searchOneRow(row, idx))
        .reduce((acc, result) => acc.concat(result), []);
      let columnResults = [...grid[0]]
        .reduce((acc, _, i) => acc.concat(...searchOneColumn(extractColumn(grid, i), i)), []);

      let diagonalLRResults = grid.reduce(
        (acc, row, rowIndex) => acc.concat(
          ...[...row].map(
            (_, colIndex) => searchOneLRDiagonal(extractDiagonal(grid, rowIndex, colIndex, LROnGrid, 1), rowIndex, colIndex)
          )
        )
        , []);

      let diagonalRLResults = grid.reduce(
        (acc, row, rowIndex) => acc.concat(
          ...[...row].map(
            (_, colIndex) => searchOneRLDiagonal(extractDiagonal(grid, rowIndex, colIndex, RLOnGrid, -1), rowIndex, colIndex)
          )
        )
        , []);
      let allResults = rowResults
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

function extractDiagonal(grid, startRow, col, onGrid, colInc) {
  return grid
    .slice(startRow)
    .filter((_, rowIndex) => onGrid(rowIndex + startRow, col, grid))
    .map(row => {
        col += colInc;
        return row[col - colInc];
      }
    )
}

const LROnGrid = (row, col, grid) => row < grid.length && col < grid[row].length;
const RLOnGrid = (row, col, grid) => row < grid.length && col >= 0;

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

function lastIndexOfRun(letter, run, firstIndex) {
  return [[...run].slice(firstIndex)
    .findIndex(el => el !== letter)]
    .map(result => result === -1 ? --run.length : --result + firstIndex)
    .pop();
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


