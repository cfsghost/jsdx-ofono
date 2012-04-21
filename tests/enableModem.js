(function() {
  var Ofono, ofono;

  Ofono = require('../index.js');

  ofono = new Ofono('/huawei_0', function() {
    ofono.modem.powered = true;
    ofono.modem.online = true;
    return console.log(ofono.modem.getProperties());
  });

}).call(this);
