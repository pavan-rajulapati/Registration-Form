const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName : {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    password : {
        type : String,
        trim : true
    },
    isVerified : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

module.exports = mongoose.model('User',userSchema);