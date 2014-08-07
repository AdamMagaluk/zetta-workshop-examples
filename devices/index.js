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
  this.create('motion-sensor', MotionSensor, Pins.MotionSensor);
  cb();
};

BeagleBone.prototype.create = function(name, Type) {
  var self = this;
  var query = this.server.where({ type: name });
  this.server.find(query, function(err, results){
    if (results.length > 0) {
      self.provision(results[0], Type);
    } else {
      self.discover(Type);
    }
  };
};
