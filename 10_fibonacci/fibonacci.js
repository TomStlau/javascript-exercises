const fibonacci = function (number) {
  if (number < 0) return 'OOPS'
  let n1 = 0,
    n2 = 1,
    next

  for (i = 0; i < number; i++) {
    console.log(n1)
    next = n1 + n2
    n1 = n2
    n2 = next
  }
  return n1
}

// Do not edit below this line
module.exports = fibonacci
