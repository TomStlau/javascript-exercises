const convertToCelsius = function (temp) {
  celsiusTemp = +((temp - 32) / 1.8).toFixed(1)
  return celsiusTemp
}

const convertToFahrenheit = function (temp) {
  fahrenheitTemp = +(temp * 1.8 + 32).toFixed(1)
  return fahrenheitTemp
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
}
