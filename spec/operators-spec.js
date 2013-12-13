var should = require('chai').should()
  , operators = require('../src/operators')
  , sum = operators.sum
  , diff = operators.diff
  , test = it;


describe('operators', function _operators() {
  test('sum', function _sum() {
    sum(1, 4).should.eql(5);
  });
  test('diff', function _diff() {
    diff(5, 3).should.eql(2);
  });
});
