
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
      var self;
      self = this;
      this.modemName = modemName;
      dbus.start(function() {
        self.systemBus = dbus.system_bus();
        self.manager = dbus.get_interface(self.systemBus, 'org.ofono', '/', 'org.ofono.Manager');
        self.modem = new Modem(self);
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
