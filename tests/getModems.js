(function() {
  var Ofono, ofono;

  Ofono = require('../index.js');

  ofono = new Ofono(function() {
    return console.log(ofono.getModems());
  });

}).call(this);
