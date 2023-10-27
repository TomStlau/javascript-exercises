const sumAll = function (firstNum, lastNum) {
  if (
    firstNum < 0 ||
    lastNum < 0 ||
    typeof firstNum != 'number' ||
    typeof lastNum != 'number'
  )
    return 'ERROR'
  if (lastNum > firstNum) {
    let nextNum = firstNum + 1
    for (let i = firstNum; i < lastNum; i++) {
      firstNum += nextNum
      nextNum++
    }
    return firstNum
  } else {
    let nextNum = firstNum - 1
    for (let i = firstNum; i > lastNum; i--) {
      firstNum += nextNum
      nextNum--
    }
    return firstNum
  }
}

// Do not edit below this line
module.exports = sumAll
