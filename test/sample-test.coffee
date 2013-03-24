# Sample test case
describe 'Sample Test', ->
    it 'should pass', ->
        expect([1,2,3]).to.have.length 3

    it 'should also pass', ->
        expect([1,2,3,4]).to.have.length 4
