/*
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

My strategy:
put the first sequence of 5 numbers on an object
take the next sequence of 5 numbers, compare it, if it is less, move on, if it is more put that on the object
return the property of the object
*/
function solution(digits){
  let digitString = digits.toString()
  console.log(digitString[0-4])
}

solution(154836394)
