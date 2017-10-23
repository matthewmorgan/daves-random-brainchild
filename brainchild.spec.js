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
});
