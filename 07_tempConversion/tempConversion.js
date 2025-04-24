const convertToCelsius = function(farenheitValue) {
  let tempInCelsius = (farenheitValue - 32) * (5 / 9);
  return Number(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function(celsiusValue) {
  let tempInFarenheit = (celsiusValue * (9 / 5)) + 32;
  return Number(tempInFarenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
