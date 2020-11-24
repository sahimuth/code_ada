const mongoose = require('mongoose')
const Schema = mongoose.Schema
//matches: {type: [Matches], required: true},
//deletedMatched: {type: [Matches], required: true},
//profile: { type: Image, required: true},
const User = new Schema(
    {
        name: { type: String, required: true },
        id: { type: Number, required: true },
        password: { type: String, required: true },
        bio: { type: String, required: true },
        hobbies: { type: [String], required: true},
        email: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        location: { type: String, required: false },
        


    },
    
    
)

module.exports = mongoose.model('users', User)