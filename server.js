var zetta = require('zetta');
var BeagleBone = require('./devices/');

zetta()
  .expose('*')
  .use(BeagleBone)
  .listen(3000, function(err) {
    console.log('Listening on port 3000');
  });
