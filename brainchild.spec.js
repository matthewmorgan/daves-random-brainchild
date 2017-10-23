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

  test('no "A"s should be found in just an array containing "B"', ()=> {
    var brainchild = new Brainchild(['B']);

    let result = brainchild.find()
    expect(result).toEqual([]);
  })

  test('Find a string of two As instead.', ()=> {
    var brainchild = new Brainchild(['BAABA']);

    let result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [0,1], end:[0,2]}]);
  });

  test('Find a string of two As in a two-line grid.', ()=> {
    var brainchild = new Brainchild(['BCCBC',
                                     'BAACC']);

    let result = brainchild.find();
    expect(result).toEqual([{letter: 'A', start: [1,1], end:[1,2]}]);
  })
});
