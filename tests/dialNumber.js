(function() {
  var Ofono, ofono;

  Ofono = require('../index.js');

  ofono = new Ofono('/huawei_0', function() {
    var vcm;
    vcm = new Ofono.VoiceCallManager(ofono.modem);
    return vcm.dial("0912345678");
  });

}).call(this);
