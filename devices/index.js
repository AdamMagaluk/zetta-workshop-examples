var util = require('util');
var Scout = require('Zetta').Scout;

var MotionSensor = require('./motion_sensor');

var Pins = {
  MotionSensor: 'P8_19'
};

var BeagleBone = module.exports = function() {
  Scout.call(this);
};
util.inherits(BeagleBone, Scout);

BeagleBone.prototype.init = function(cb) {
  this.discover(MotionSensor, Pins.MotionSensor);
  cb();
};
