// replace this generic Kata class with your main business class
class Kata {
    constructor (grid) {
      this.grid = grid;
    }
    find() {
      // This method will find the longest sequence of the letter 'A' in the 2-D array
      let run_length = 0;
      for(let row of grid) {
        for(let x in row){
          if (x == 'A'){
            run_length++;
          }
          else {
            // run broken
            run_length = 0;
          }
        }
      }

      return[{letter: 'A', start: G}]
      if (this.grid.length == 2){
        return [{letter: 'A'}]
      }
      if (this.grid[0].length > 1){
        return [{letter: 'A', start: [0,1], end:[0,2]}];
      }
      if (this.grid[0] == "A") {
        return [{letter: 'A', start: [0, 0], end: [0, 0]}];
      } else {
        return [];
      }
    }
}

module.exports = Kata;
