
/*
JSDX ofono API

by Yao Wei <mwei@lxde.org>
*/

(function() {
  var Modem, Ofono, dbus;

  dbus = require('dbus');

  Modem = require('./lib/modem');

  Ofono = (function() {

    function Ofono(modemName, callback) {
      var _this = this;
      this.modemName = modemName;
      dbus.start(function() {
        _this.systemBus = dbus.system_bus();
        _this.manager = dbus.get_interface(_this.systemBus, 'org.ofono', '/', 'org.ofono.Manager');
        _this.modem = new Modem(_this);
        return callback();
      });
    }

    Ofono.prototype.getModems = function() {
      return this.manager.GetModems();
    };

    Ofono.prototype.dbus = dbus;

    Ofono.VoiceCallManager = require('./lib/voicecallmanager');

    return Ofono;

  })();

  module.exports = Ofono;

}).call(this);
