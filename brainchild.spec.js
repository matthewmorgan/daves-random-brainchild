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

  // TODO: Write some tests to get to the end of this!

  test('can find the letter two long streams', () => {
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

  test('can find the letter two long streams', () => {
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
