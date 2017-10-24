module.exports = function(grid){
  return {
    find: ()=> {
      return [{ letter: grid[0], start: [0, 0], end: [0, 0] }];
    }
  }
};
