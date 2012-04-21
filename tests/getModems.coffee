Ofono = require '../index.js'

ofono = new Ofono ->
  console.log ofono.getModems()
