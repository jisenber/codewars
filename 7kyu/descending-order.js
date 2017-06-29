/*

Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:

Input: 21445 Output: 54421

Input: 145263 Output: 654321

Input: 1254859723 Output: 9875543221


*/

function descendingOrder(n){
  if(!n || isNaN(n)) {
    return 0;
  }
  let numString = n.toString();
  let numArray = numString.split('');
  let sorted = mergeSort(numArray);
  let sortedString = sorted.join('');
  let answer = parseInt(sortedString);
  return answer;
}

function mergeSort(array) {
  if(array.length < 2) {
    return array;
  }
  let middle = Math.floor(array.length/2);
  let leftSide = array.slice(0, middle);
  let rightSide = array.slice(middle);

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}


function merge(left, right) {
  let bigMoney = [];
  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      bigMoney.push(left.shift());
    } else {
      bigMoney.push(right.shift());
    }
  }
  while (right.length) {
    bigMoney.push(right.shift());
  }
  while (left.length) {
    bigMoney.push(left.shift());
  }
  return bigMoney;
}


console.log(descendingOrder(1234567));
