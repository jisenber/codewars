function digPow(n, p) {
  if(!n || !p) {
    return -1
  }
  let evaluated = 0
  let stringNum = n.toString() //turn into string
  let numArray = stringNum.split(''); //string method to split it into individual elements
  for(let i = 0; i < numArray.length; i++) {
    evaluated += Math.pow(numArray[i], p)
    p++
  }
  if (evaluated % n === 0) {
    return (evaluated/n); // (evaluated/n) = k
  } else {
    return -1
  }
}
