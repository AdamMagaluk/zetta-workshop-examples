var b = require('bonescript');
//var led = "P8_13";
//b.pinMode(led, 'out');
b.pinMode('P8_19', b.INPUT);
b.attachInterrupt('P8_19', true, b.FALLING, printStatus);

function printStatus(x) {
  if (x.value === 0) {
//    b.digitalWrite(led, 1);
    console.log("Motion Detected");
  } else {
    console.log("No Motion Detected");
//    b.digitalWrite(led, 0);
  }
}
