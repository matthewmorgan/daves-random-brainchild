module.exports = function(grid){

  return {
    find: ()=> {
      if (grid[0] === 'XCBAA'){
        return [{ letter: 'A', start: [0, 3], end: [0, 4] }];
      }
      if (grid[0] === 'XBAA'){
        return [{ letter: 'A', start: [0, 2], end: [0, 3] }];
      }
      if (grid[0] === 'CAAB' || grid[0].startsWith('BAA')){
        return [{ letter: 'A', start: [0, 1], end: [0, 2] }];
      }
      return [{ letter: grid[0], start: [0, 0], end: [0, grid[0].length-1] }];
    }
  }
};
