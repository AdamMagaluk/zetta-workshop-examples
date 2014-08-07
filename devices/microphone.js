var util = require('util');
var Device = require('zetta').Device;
var b = require('bonescript');

var MotionSensor = module.exports = function(pin) {
  this.pin = pin;
  this.amplitude = 0;
  Device.call(this);
};
util.inherits(MotionSensor, Device);

MotionSensor.prototype.init = function(config) {
  config
    .type('microphone')
    .name('Microphone')
    .state('ready')
    .monitor(this.amplitude);
  
  var self = this;
  setInterval(function() {
    b.analogRead(self.pin, function(x) {
      self.amplitude = x.value;
    });
  }, 300);
};


