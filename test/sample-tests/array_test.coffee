# Sample test case
# describe 'Array', ->
#   describe '#indexOf()', ->
#     it 'should return -1 when the value is not present', ->
#       expect( [1,2,3].indexOf(5) ).to.equal -1
#       expect( [1,2,3].indexOf(0) ).to.equal -1

test 'Array#indexOf', ->
  equal [1,2,3].indexOf(5), -1, 'should return -1 when the value is not present'
