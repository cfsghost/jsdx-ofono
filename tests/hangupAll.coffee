Ofono = require '../index.js'

ofono = new Ofono '/huawei_0', ->
  vcm = new Ofono.VoiceCallManager ofono.modem
  vcm.hangupAll()
