let mongoose = require('mongoose')
let Campaign = require('./campaign')

let characterSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 1
    },
    lastname: String,
    class: String,
    race: String,
    backstory: String,
    personsOfInterest: [],
    alignment: String,
    campaigns: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Campaign'
    }],
    profilePic: String,
})

module.exports = mongoose.model('Character', characterSchema)
