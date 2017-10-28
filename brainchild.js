const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
module.exports = function(grid){

  return {
    find: ()=> {
      const results = [];
      let longest = 0;
      for (let letter of LETTERS){
        if (grid[0].includes(letter)){
          const [start, end] = [[0, grid[0].indexOf(letter)], [0, lastIndexOfRun(letter, grid[0], grid[0].indexOf(letter))]];
          longest = Math.max(longest, end[1]-start[1]);
          results.push({letter, start, end});
        }
      }
      return results.filter(result => result.end[1]-result.start[1] >= longest);
    }
  }
};

function lastIndexOfRun(letter, string, firstIndexOf){
  for (let i = firstIndexOf; i < string.length; i++){
    if (string[i] !== letter){
      return i -1 ;
    }
  }
  return string.length - 1;
}
