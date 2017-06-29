/*

For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times

*/

function encrypt(text, n) {
  if(!n) return text
  if(text === null) return null
  if(text === '') return ''
  if (n <= 0) { //base case
    return text
  }
  let everyOther = '' //collection of every other character in the string
  let theRest = '' //collection of the rest of the characters
  for (let i=1; i<text.length+1; i++) {
    if (i % 2 === 0) {
      everyOther += text.slice(i-1, i)
    } else {
      theRest += text.slice(i-1, i)
    }
  }
    text = everyOther.concat(theRest)
    return encrypt(text, n-1)
}

function decrypt(encryptedText, n) {
  if(encryptedText === null) return null
  if(encryptedText === '') return ''
  if(!n) return encryptedText
  if (n <= 0) { //base case
    return encryptedText
  }
  let decryptedText = ''
  let middle = Math.floor(encryptedText.length/2)
  let everyOther = encryptedText.slice(0, middle)
  let theRest = encryptedText.slice(middle)
  for (let i=0; i<encryptedText.length; i++) {
      decryptedText += theRest.charAt(i)
      decryptedText += everyOther.charAt(i)
    }
  return decrypt(decryptedText, n-1)
}
