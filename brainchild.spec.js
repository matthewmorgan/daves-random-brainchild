const Brainchild = require('./brainchild');

// expect.prototype.objectEquals = (args) => true;

describe('Brainchild class can', () => {
  test('be initialized with a grid of letters', () => {
    new Brainchild(['A']);
  });

  test('can find the letter A', () => {
    const brainchild = new Brainchild(['A']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 0], end: [0, 0]}]);
  });

  test('can find two letters AA', () => {
    const brainchild = new Brainchild(['AA']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 0], end: [0, 1]}]);
  });

  test('can find two letters AA in a different spot', () => {
    const brainchild = new Brainchild(['BAA']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 1], end: [0, 2]}]);
  });

  test('can find two letters AA in a different grid', () => {
    const brainchild = new Brainchild(['CAAB']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 1], end: [0, 2]}]);
  });

  test('can find two letters AA in another different grid', () => {
    const brainchild = new Brainchild(['XBAA']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 2], end: [0, 3]}]);
  });

  test('can find two letters AA in yet another different grid', () => {
    const brainchild = new Brainchild(['XCBAA']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 3], end: [0, 4]}]);
  });

  test('can find a letter B', () => {
    const brainchild = new Brainchild(['B']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'B', start: [0, 0], end: [0, 0]}]);
  });

  test('can find A and B when the lengths are equal', () => {
    const brainchild = new Brainchild(['AABB']);

    const result = brainchild.find();
    expect(result).toEqual([
      {letter: 'A', start: [0, 0], end: [0, 1]},
      {letter: 'B', start: [0, 2], end: [0, 3]},
    ]);
  });

  test('can find A when B is not as long', () => {
    const brainchild = new Brainchild(['AAABB']);

    const result = brainchild.find();
    expect(result).toEqual([
      {letter: 'A', start: [0, 0], end: [0, 2]}]);
  });

  test('can find B when A is not as long', () => {
    const brainchild = new Brainchild(['AABBB']);

    const result = brainchild.find();
    expect(result).toEqual([
      {letter: 'B', start: [0, 2], end: [0, 4]}]);
  });

  test('can find the right length stream of A when there is more than one stream of A', () => {
    const brainchild = new Brainchild(['AAABBAA']);

    const result = brainchild.find();
    expect(result).toEqual([
        {letter: 'A', start: [0, 0], end: [0, 2]}
      ]
    );
  });

  test('can find the longest stream of A when the grid is two rows', () => {
    const brainchild = new Brainchild(['AABBAA', 'AAACDC']);

    const result = brainchild.find();
    expect(result).toEqual([
        {letter: 'A', start: [1, 0], end: [1, 2]}
      ]
    );
  });

  test('can find the longest stream of A and B when the grid is two rows', () => {
    const brainchild = new Brainchild(['ABBBAA', 'AAACDC']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'A', start: [1, 0], end: [1, 2]},
        {letter: 'B', start: [0, 1], end: [0, 3]}
      ]
    ));
    expect(result.length).toBe(2);
  });

  test('can find the longest stream of A vertically', () => {
    const brainchild = new Brainchild(['AB', 'AD']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'A', start: [0, 0], end: [1, 0]}
      ]
    ));
  });


  test('can find the longest stream of B vertically', () => {
    const brainchild = new Brainchild(['AB', 'CB']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'B', start: [0, 1], end: [1, 1]}
      ]
    ));
  });

  test('can find A and B vertical streams', () => {
    const brainchild = new Brainchild(['AB', 'AB']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'B', start: [0, 1], end: [1, 1]},
        {letter: 'A', start: [0, 0], end: [1, 0]}
      ]
    ));
  });


  test('can find A and B vertical streams when there are more letters', () => {
    const brainchild = new Brainchild(['ABC', 'ABD']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'B', start: [0, 1], end: [1, 1]},
        {letter: 'A', start: [0, 0], end: [1, 0]}
      ]
    ));
  });

  test('can find A and B vertical streams rearranged', () => {
    const brainchild = new Brainchild(['ACB', 'ADB']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'B', start: [0, 2], end: [1, 2]},
        {letter: 'A', start: [0, 0], end: [1, 0]}
      ]
    ));
  });

  test('can find A, B, and C vertical streams', () => {
    const brainchild = new Brainchild(['ABC', 'ABC']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'C', start: [0, 2], end: [1, 2]},
        {letter: 'B', start: [0, 1], end: [1, 1]},
        {letter: 'A', start: [0, 0], end: [1, 0]}
      ]
    ));
  });

  test('can find A, B, and C vertical streams in a different order', () => {
    const brainchild = new Brainchild(['CAB', 'CAB']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'B', start: [0, 2], end: [1, 2]},
        {letter: 'A', start: [0, 1], end: [1, 1]},
        {letter: 'C', start: [0, 0], end: [1, 0]}
      ]
    ));
  });

  test('can find A, B, and C vertical streams with a third row', () => {
    const brainchild = new Brainchild(['ABC', 'ABC', 'ABC']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
        {letter: 'C', start: [0, 2], end: [2, 2]},
        {letter: 'B', start: [0, 1], end: [2, 1]},
        {letter: 'A', start: [0, 0], end: [2, 0]}
      ]
    ));
  });
  // TODO: Write some tests to get to the end of this!

  test('can find the letters in two long streams', () => {
    const brainchild = new Brainchild([
      'AAAAAB',
      'BCDEFB',
      'FGHIJB',
      'JKLMNB',
      'NOPQRB']);

    const result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0, 0], end: [0, 4]},
      {letter: 'B', start: [0, 5], end: [4, 5]}]);
  });

  test('can find a diagonal stream as well', () => {
    const brainchild = new Brainchild([
      'AACDE',
      'BADEF',
      'FAAIJ',
      'JALAN',
      'NAPQA']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
      {letter: 'A', start: [0, 0], end: [4, 4]},
      {letter: 'A', start: [0, 1], end: [4, 1]},
    ]));
    expect(result.length).toBe(2);
  });
  test('can find a diagonal stream in a different place', () => {
    const brainchild = new Brainchild([
      'XACDE',
      'BAAEF',
      'FAIAJ',
      'JALNA',
      'NXPQA']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
      {letter: 'A', start: [0, 1], end: [3, 4]},
      {letter: 'A', start: [0, 1], end: [3, 1]},
    ]));
    expect(result.length).toBe(2);
  });
  test('can find a diagonal stream in RL direction', () => {
    const brainchild = new Brainchild([
      'XACDA',
      'BAAAF',
      'FAAAJ',
      'JALNA',
      'NXPQA']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
      {letter: 'A', start: [0, 1], end: [3, 4]},
      {letter: 'A', start: [0, 4], end: [3, 1]},
      {letter: 'A', start: [0, 1], end: [3, 1]},
    ]));
    expect(result.length).toBe(3);
  });

  test('can find a diagonal stream that doesn\'t start on the first row', () => {
    const brainchild = new Brainchild([
      'ABCD',
      'EFGH',
      'XJKL',
      'MXOP',
      'QRXT']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
      {letter: 'X', start: [2, 0], end: [4, 2]}
    ]));
    expect(result.length).toBe(1);
  });

  test('can find a diagonal stream in the other direction that doesn\'t start on the first row', () => {
    const brainchild = new Brainchild([
      'ABCD',
      'EFGH',
      'XJXL',
      'MXOP',
      'XRXT']);

    const result = brainchild.find();
    expect(result).toEqual(expect.arrayContaining([
      {letter: 'X', start: [2, 2], end: [4, 0]},
      {letter: 'X', start: [2, 0], end: [4, 2]}
      ]));
    expect(result.length).toBe(2);
  });

});
