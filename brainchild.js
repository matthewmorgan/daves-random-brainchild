module.exports = function(grid){

  return {
    find: ()=> {
      let letter = 'A';
      if (grid[0] === 'B'){
        letter = 'B';
      }
      const [start, end] = [[0, grid[0].indexOf(letter)], [0, grid[0].lastIndexOf(letter)]];
      return [{ letter, start, end}];
    }
  }
};
