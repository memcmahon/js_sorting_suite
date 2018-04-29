const assert = require('chai').assert
const bubbleSort = require('../bubbleSort')

describe('bubbleSort functionality', function() {
  it('can sort an array of numbers', function() {
    var expected = [6,7,8,9,10];

    assert.deepEqual(bubbleSort([10,9,8,7,6]), expected);
  });
});
