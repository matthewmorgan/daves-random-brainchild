const Brainchild = require('./brainchild');

describe('Brainchild class can', () => {
  test('be initialized with a grid of letters', () => {
    Brainchild(['A']);
  });

  test('can find the letter A', () => {
    const result = Brainchild(['A']);

    expect(result).toEqual([{ letter: 'A', start: [0, 0], end: [0, 0] }]);
  });

  test('can find the letter C', () => {
    const result = Brainchild(['C']);

    expect(result).toEqual([{ letter: 'C', start: [0, 0], end: [0, 0] }]);
  });

  test('can find 2 letters AA', () => {
      const result = Brainchild(['AA']);
      expect(result).toEqual([{letter: 'A', start: [0, 0], end: [0, 1] }]);
  })

  test('can find a 3 letter string AAA', () => {
      const result = Brainchild(['AAA']);
      expect(result).toEqual([{letter: 'A', start: [0, 0], end: [0, 2] }]);
  })
  // TODO: Write some tests to get to the end of this!

  xtest('can find the letter two long streams', () => {
    const result = Brainchild([
      'AAAAAB',
      'BCDEFB',
      'FGHIJB',
      'JKLMNB',
      'NOPQRB']);

    expect(result).toEqual([{ letter: 'A', start: [0, 0], end: [0, 4] },
      { letter: 'B', start: [0, 5], end: [4, 5] }]);
  });

  xtest('can find the letter two long streams', () => {
    const result = Brainchild([
      'AACDE',
      'BADEF',
      'FAAIJ',
      'JALAN',
      'NAPQA']);

    expect(result).toEqual([{ letter: 'A', start: [0, 0], end: [4, 4] },
      { letter: 'A', start: [0, 1], end: [4, 1] }]);
  });
});
