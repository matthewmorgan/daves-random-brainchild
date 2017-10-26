module.exports = function(grid){

  return {
    find: ()=> {
      const [start, end] = [[0, grid[0].indexOf('A')], [0, grid[0].lastIndexOf('A')]];
      return [{ letter: 'A', start, end}];
    }
  }
};
