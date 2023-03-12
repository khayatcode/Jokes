const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [2, "Setup must be atleast 2 characters long"],
        maxlength: [255, "Setup must be less than 255 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [2, "Punchline must be atleast 2 characters long"],
        maxlength: [255, "Pumchline must be less than 255 characters long"]
    }

}, {timestamps: true})

module.exports = mongoose.model('Joke', JokeSchema)