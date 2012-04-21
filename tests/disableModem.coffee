Ofono = require '../index.js'

ofono = new Ofono '/huawei_0', ->
  ofono.modem.powered = false
  ofono.modem.online = false
  console.log ofono.modem.getProperties()
