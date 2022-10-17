

const bmiCalculator = (weightKg,heightCm) => {
  let compute = (weightKg / heightCm / heightCm) * 10000;
  let result = compute.toFixed(2);
    if (result < 18.5) {
      console.log(`Underweight: ${result}`);
    } else if (result >= 18.5 && result <= 24.9) {
      console.log(`Normal Weight: ${result}`);
    } else if (result >= 25 && result <= 29.9) {
      console.log(`Overweight: ${result}`);
    } else {
      console.log(`Obesity: ${result}`);
    }
  }


bmiCalculator(80,200);
bmiCalculator(65,200);
bmiCalculator(55,118);
bmiCalculator(55,148);
