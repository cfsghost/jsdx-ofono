Ofono = require '../index.js'

ofono = new Ofono '/huawei_0', ->
  ofono.modem.powered = true
  ofono.modem.online = true
  console.log ofono.modem.getProperties()
