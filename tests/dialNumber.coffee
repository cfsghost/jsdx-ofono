Ofono = require '../index.js'

ofono = new Ofono '/huawei_0', ->
  vcm = new Ofono.VoiceCallManager ofono.modem
  vcm.dial "0912345678"
