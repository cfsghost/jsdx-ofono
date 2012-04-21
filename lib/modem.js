(function() {
  var Modem;

  Modem = (function() {

    function Modem(ofono) {
      this.ofono = ofono;
      this.dbus = this.ofono.dbus;
      this.service = this.dbus.get_interface(this.dbus.system_bus(), 'org.ofono', this.ofono.modemName, 'org.ofono.Modem');
      this.__defineGetter__('powered', function() {
        return this.getProperties()['Powered'];
      });
      this.__defineSetter__('powered', function(value) {
        return this.setProperty('Powered', value);
      });
      this.__defineGetter__('online', function() {
        return this.getProperties()['Online'];
      });
      this.__defineSetter__('online', function(value) {
        return this.setProperty('Online', value);
      });
    }

    Modem.prototype.getProperties = function(properites) {
      return this.service.GetProperties();
    };

    Modem.prototype.setProperty = function(property, value) {
      return this.service.SetProperty(property, value);
    };

    return Modem;

  })();

  module.exports = Modem;

}).call(this);
