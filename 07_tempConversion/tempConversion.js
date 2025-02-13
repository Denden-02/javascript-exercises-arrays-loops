const convertToCelsius = function(Fahr) {
  Cels = (Math.round((Fahr-32)*(5/9)*10))/10;
  return Cels;
};

const convertToFahrenheit = function(Cels) {
  Fahr = (Math.round((((9/5)*Cels)+32)*10))/10;
  return Fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
