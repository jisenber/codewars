/*
91 is the greatest sequence of 2 digits.

Complete the solution so that it returns the largest five digit number found within the number given.. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

My strategy:
put the first sequence of 5 numbers on an object
take the next sequence of 5 numbers, compare it, if it is less, move on, if it is more put that on the object
return the property of the object
*/
function solution(digits){
  if(!digits) return 0;
  if (digits.length < 0) return digits;
  let highest;
  let compareMe;
  let digitString = digits.toString();
  let digitArray = digitString.split('');
  let firstSeries = digitArray.slice(0,5);
  highest = firstSeries.join('');
  while (digitArray.length > 5) {
    digitArray.shift();
    let nextSeries = digitArray.slice(0,5);
    compareMe = nextSeries.join('');
    if(highest >= compareMe) {
      continue;
    } else {
      highest = compareMe;
    }
  }
  return highest;
}

console.log(solution(154836394));
