let mongoose = require('mongoose')

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
    profilePic: String,
})

module.exports = mongoose.model('Character', characterSchema)
