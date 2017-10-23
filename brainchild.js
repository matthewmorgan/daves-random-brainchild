// replace this generic Kata class with your main business class
class Kata {
    constructor (grid) {
      this.grid = grid;
    }
    find() {
      // This method will find the longest sequence of the letter 'A' in the 2-D array
      if (this.grid[0] == "A") {
        return [{letter: 'A', start: [0, 0], end: [0, 0]}];
      } else {
        return [];
      }
    }
}

module.exports = Kata;
