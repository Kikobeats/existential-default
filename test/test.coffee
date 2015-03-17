existsDefault = require '..'
should        = require 'should'

describe 'existential default ::', ->

  it 'when not exists add a value', ->
    a = null
    a = existsDefault(a, 'hello world')
    a.should.eql 'hello world'

  it 'when exists use the original value', ->
    a = 'hello world'
    a = existsDefault(a, 'foo')
    a.should.eql 'hello world'
