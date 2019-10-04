let mongoose = require('mongoose')
let Character = require('./characters')

let characterSchema = new mongoose.Schema({
  journeyName: String,
  characters: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Character'
  }]
})

module.exports = mongoose.model('Campaign', characterSchema)
