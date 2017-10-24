const Brainchild = require('./brainchild');

describe('Brainchild class can', () => {
  test('be initialized with a grid of letters', ()=> {
    var brainchild = new Brainchild(['A']);
  })

  test('can find the letter A', ()=> {
    var brainchild = new Brainchild(['A']);

    let result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0,0], end:[0,0]}])
  })

  // TODO: Write some tests to get to the end of this!

  test('can find the letter two long streams', ()=> {
    var brainchild = new Brainchild([
      'AAAAAX',
      'BCDEFB',
      'FGHIJB',
      'JKLMNB',
      'NOPQRB']);

    let result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0,0], end:[0,4]},
      {letter:'B', start:[1,5], end:[4,5]}])
  })

test('can find the letter two long streams', ()=> {
    var brainchild = new Brainchild([
      'AACDE',
      'BADEF',
      'FAAIJ',
      'JALAN',
      'NAPQA']);

    let result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0,0], end:[4,4]},
      {letter:'A', start:[0,1], end:[4,1]}])
  })

});
