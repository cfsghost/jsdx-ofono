(function() {
  var VoiceCallManager;

  VoiceCallManager = (function() {

    function VoiceCallManager(modem) {
      this.ofono = modem.ofono;
      this.dbus = this.ofono.dbus;
      this.service = this.dbus.get_interface(this.dbus.system_bus(), 'org.ofono', this.ofono.modemName, 'org.ofono.VoiceCallManager');
    }

    VoiceCallManager.prototype.dial = function(number, hideCallerId) {
      if (hideCallerId == null) hideCallerId = "default";
      return this.service.Dial(number, hideCallerId);
    };

    VoiceCallManager.prototype.hangupAll = function() {
      return this.service.HangupAll();
    };

    return VoiceCallManager;

  })();

  module.exports = VoiceCallManager;

}).call(this);
