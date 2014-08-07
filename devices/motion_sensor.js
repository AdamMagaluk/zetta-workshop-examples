var util = require('util');
var Device = require('zetta').Device;
var b = require('bonescript');

var MotionSensor = module.exports = function(pin) {
  this.pin = pin;
  Device.call(this);
};
util.inherits(MotionSensor, Device);

MotionSensor.prototype.init = function(config) {
  config
    .type('motion-sensor')
    .name('Motion Sensor')
    .state('undetermined');

  b.pinMode(this.pin, b.INPUT);
  b.attachInterrupt(this.pin, true, b.CHANGE, this.onChange.bind(this));
};

MotionSensor.prototype.onChange = function(x) {
  if (x.value === 0) {
    this.state = 'motion';
  } else {
    this.state = 'no-motion';
  }
};
