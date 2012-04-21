class Modem
  constructor: (ofono) ->
    @ofono = ofono
    @dbus = @ofono.dbus
    @service = @dbus.get_interface @dbus.system_bus(), 'org.ofono', @ofono.modemName, 'org.ofono.Modem'

    @__defineGetter__ 'powered', ->
      return @getProperties()['Powered']

    @__defineSetter__ 'powered', (value) ->
      @setProperty 'Powered', value

    @__defineGetter__ 'online', ->
      return @getProperties()['Online']

    @__defineSetter__ 'online', (value) ->
      @setProperty 'Online', value

  getProperties: (properites) ->
    return @service.GetProperties()

  setProperty: (property, value) ->
    return @service.SetProperty property, value

module.exports = Modem
