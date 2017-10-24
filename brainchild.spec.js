const Brainchild = require('./brainchild');

describe('Brainchild class can', () => {
  test('be initialized with a grid of letters', () => {
    new Brainchild(['A']);
  });

  test('can find the letter A', () => {
    const brainchild = new Brainchild(['A']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'A', start: [0, 0], end: [0, 0] }]);
  });

  test('can find the letter B', () => {
    const brainchild = new Brainchild(['B']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'B', start: [0, 0], end: [0, 0] }]);
  });

  test('can find two letters AA', () => {
    const brainchild = new Brainchild(['AA']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'AA', start: [0, 0], end: [0, 1] }]);
  });

  test('can find two letters AA in a different spot', () => {
    const brainchild = new Brainchild(['BAA']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'A', start: [0, 1], end: [0, 2] }]);
  });

  test('can find two letters AA in a different grid', () => {
    const brainchild = new Brainchild(['CAAB']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'A', start: [0, 1], end: [0, 2] }]);
  });


  // TODO: Write some tests to get to the end of this!

  xtest('can find the letter two long streams', () => {
    const brainchild = new Brainchild([
      'AAAAAX',
      'BCDEFB',
      'FGHIJB',
      'JKLMNB',
      'NOPQRB']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'A', start: [0, 0], end: [0, 4] },
      { letter: 'B', start: [1, 5], end: [4, 5] }]);
  });

  xtest('can find the letter two long streams', () => {
    const brainchild = new Brainchild([
      'AACDE',
      'BADEF',
      'FAAIJ',
      'JALAN',
      'NAPQA']);

    const result = brainchild.find();
    expect(result).toEqual([{ letter: 'A', start: [0, 0], end: [4, 4] },
      { letter: 'A', start: [0, 1], end: [4, 1] }]);
  });
});
