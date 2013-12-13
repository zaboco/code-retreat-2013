should = require \chai .should!
test = it

{sum, diff} = require '../src/operators.ls'

describe \operators ->
  test \sum ->
    sum 1 2 .should.eql 3
  test \diff ->
    diff 3 1 .should.eql 2
