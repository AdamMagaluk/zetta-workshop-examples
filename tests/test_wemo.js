var WeMo = require('wemo');

WeMo.Search('chicago', function(err, device) {
  console.log(device)
  var s = new WeMo(device.ip, device.port);
  s.setBinaryState(1, function(){
    setTimeout(s.setBinaryState.bind(s, 0, function(){}), 2000)
  });
}); 
