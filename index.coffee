###
JSDX ofono API

by Yao Wei <mwei@lxde.org>
###

dbus = require 'dbus'
Modem = require './lib/modem'
# VoiceCall = require './lib/voicecall'
# Message = require './lib/message'
# Sim = require './lib/sim'

class Ofono
  constructor: (modemName, callback) ->
    @modemName = modemName
    dbus.start =>
      @systemBus = dbus.system_bus()
      @manager = dbus.get_interface @systemBus, 'org.ofono', '/', 'org.ofono.Manager'
      @modem = new Modem(@)
      callback()
  getModems: () ->
    return @manager.GetModems()
  dbus: dbus
  @VoiceCallManager: require './lib/voicecallmanager'

module.exports = Ofono
