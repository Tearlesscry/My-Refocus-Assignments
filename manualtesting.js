

const bmiCalculator = (weightKg,heightCm) => {
  let compute = (weightKg / heightCm / heightCm) * 10000;
  let result = compute.toFixed(2);
    if (result < 18.5) {
      return `Underweight: ${result}`;
    } else if (result >= 18.5 && result <= 24.9) {
      return `Normal Weight: ${result}`;
    } else if (result >= 25 && result <= 29.9) {
      return `Overweight: ${result}`;
    } else {
      return `Obesity: ${result}`;
    }
  };

  const test = () => {
    const outcome = bmiCalculator(80,200);
    const expected = "Normal Weight: 20.00";
    
    console.log(outcome)

    console.assert (
      outcome === expected,
      `The result ${outcome} doesn't match the expected value ${expected}.`
    );
  };

  test()