const convertToCelsius = function(farenheitValue) {
  let tempInCelsius = (farenheitValue - 32) * (5 / 9);
  return Number(tempInCelsius.toFixed(1));
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
