//Task 1
//O2 saturation
let saturation = 99;

const oxygenSat = (saturation) => {
  if (saturation >= 96) {
    console.log("Normal reading.");
  } else if (saturation == 95) {
    console.log('Acceptable to continue home monitoring');
  } else if (saturation == 93 || saturation ==94){
    console.log('Seek advice from health professionals');
  } else {
    console.log('Seek urgent medical advice');
  }
}

oxygenSat(saturation);

//Task 2
//Pulse rate
let pulse = 99;

const pulseRate = (pulse) => {
  if (pulse >= 40 && pulse <= 100) {
    console.log('Normal Reading.');
  } else if (pulse >= 101 && pulse <= 109){
    console.log('Acceptable to continue home monitoring.');
  } else if (pulse >= 110 && pulse <= 130) {
    console.log('Seek advice from health professionals');
  } else {
    console.log('Seek urgent medical advice.')
  }
}

pulseRate(pulse);