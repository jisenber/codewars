/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
*/

//THIS TIMED OUT AND WAS NOT ABLE TO PASS THE EFFICIENCY TEST

let obj = {}

var sum_pairs=function(ints, s){
    if(!Array.isArray(ints)) return
    if(!s || !ints.length) return
      let index = ints.shift()
      if (obj[index]) {
        ints.shift()
        return sum_pairs(ints, s)
      } else {
        obj[index] = true
        return checkAllSums(index, ints, s)
        }
    }

function checkAllSums(index, list, target) {
  for (let i=0; i<list.length; i++) {
    if (index + list[i] === target) {
      return [index, list[i]]
    }
  }
}
