const removeFromArray = function (list, ...items) {
  for (let i = 0; i < items.length; i++) {
    if (list.includes(items[i])) {
      let itemId = list.indexOf(items[i])
      list.splice(itemId, 1)
    }
  }
  return list
}

// Do not edit below this line
module.exports = removeFromArray
