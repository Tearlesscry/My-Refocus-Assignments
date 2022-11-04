
const bmiCalculator = require("./bmi-calculator");

test("Checks if 80kg & 200cm equals to Normal Weight", () => {
  expect(bmiCalculator(80,200)).toBe("Normal Weight: 20.00");
});

test("Checks if 65kg & 200cm equals to Underweight", () => {
  expect(bmiCalculator(65,200)).toBe("Underweight: 16.25");
});

test("Checks if 55kg & 118cm equals to Obesity", () => {
  expect(bmiCalculator(55,118)).toBe("Obesity: 39.50");
});

test("Checks if 55kg & 148cm equals to Overweight", () => {
  expect(bmiCalculator(55,148)).toBe("Overweight: 25.11");
});