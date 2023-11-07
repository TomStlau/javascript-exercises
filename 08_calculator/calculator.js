const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

const sum = function (array) {
  return array.reduce((number, reducer) => {
    return (number += reducer)
  }, 0)
}

const multiply = function ([...args]) {
  return args.reduce((number, reducer) => {
    return (number *= reducer)
  }, 1)
}

const power = function (power, num) {
  return (power **= num)
}

function factorial (num) {
  if (typeof num !== 'number' || num < 0 || Math.floor(num) !== num) {
    throw new Error('Input must be a non-negative integer')
  }
  if (num === 1 || num === 0) return 1
  let result = 1
  for (let i = 2; i <= num; i++) {
    result *= i
  }
  return result
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}
