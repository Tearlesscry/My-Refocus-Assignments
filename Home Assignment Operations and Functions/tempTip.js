//Task 1

const convertToKelvin = (tempCelsius) => {
  let tempKelvin = tempCelsius + 273.15;
  return tempKelvin;
}

console.log(convertToKelvin(35));

const convertToKelvin2 = (tempFahrenheit) => {
  let tempKelvin = (tempFahrenheit -32) *5/9 + 273.15;
  return tempKelvin.toFixed(2);
}

console.log(convertToKelvin2(32));

//Task 2
//Tip Calculator

const computeTip = (totalBill) => {
  let tipTotal = totalBill * 0.10;
  return tipTotal;
}

console.log(computeTip(1000));