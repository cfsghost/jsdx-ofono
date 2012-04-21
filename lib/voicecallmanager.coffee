class VoiceCallManager
  constructor: (modem) ->
    @ofono = modem.ofono
    @dbus = @ofono.dbus
    @service = @dbus.get_interface @dbus.system_bus(), 'org.ofono', @ofono.modemName, 'org.ofono.VoiceCallManager'

  dial: (number, hideCallerId = "default") ->
    return @service.Dial number, hideCallerId

  hangupAll: () ->
    return @service.HangupAll()

module.exports = VoiceCallManager
