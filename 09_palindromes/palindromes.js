const palindromes = function (word) {
  const strippedWord = word
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
    .replaceAll(' ', '')
    .toLowerCase()
  const reversedWord = strippedWord.split('').reverse().join('')
  if (strippedWord === reversedWord) return true
  return false
}
console.log(palindromes('Animal loots foliated detail of stool lamina.'))

// Do not edit below this line
module.exports = palindromes
