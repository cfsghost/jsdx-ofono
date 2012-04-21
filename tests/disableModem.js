(function() {
  var Ofono, ofono;

  Ofono = require('../index.js');

  ofono = new Ofono('/huawei_0', function() {
    ofono.modem.powered = false;
    ofono.modem.online = false;
    return console.log(ofono.modem.getProperties());
  });

}).call(this);
