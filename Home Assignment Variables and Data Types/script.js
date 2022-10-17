//Task 1
//Calories burned every 30 minutes
let caloriesBurned = 225;
//Number of days sam cycles
let daysCycling = 15;
//number of hours a day
let cycleHoursPerDay = 0.5;
//Total calories burned in 15 days
let totalCalBurned = caloriesBurned * daysCycling;

console.log(`Great work, Sam! After ${cycleHoursPerDay} hours of running every day for a week, you may lose a total of ${totalCalBurned} calories.`)

//Task 2
//Goal of 10000 savings;
let goalAmount = 10000;
//Already saved money
let saved = 7500;
//Percent away from goal
let difference = (goalAmount - saved) /goalAmount;
let percentAway = difference * 100;

console.log(`Thank you for your discipline and hard work, Sam! You are now ${percentAway}% away from your goal of saving \u20B1${goalAmount}.`)