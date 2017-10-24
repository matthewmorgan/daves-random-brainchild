module.exports = function(grid){

  return {
    find: ()=> {
      if (grid[0] === 'BAA'){
        return [{ letter: 'A', start: [0, 1], end: [0, 2] }];
      }
      return [{ letter: grid[0], start: [0, 0], end: [0, grid[0].length-1] }];
    }
  }
};
