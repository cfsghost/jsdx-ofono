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
    self = @
    @modemName = modemName
    dbus.start ->
      self.systemBus = dbus.system_bus()
      self.manager = dbus.get_interface self.systemBus, 'org.ofono', '/', 'org.ofono.Manager'
      self.modem = new Modem(self)
      callback()
  getModems: () ->
    return @manager.GetModems()
  dbus: dbus
  @VoiceCallManager: require './lib/voicecallmanager'

module.exports = Ofono
