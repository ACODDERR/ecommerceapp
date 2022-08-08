const mongoose = require("mongoose")

const SignUpTemplate = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    }
})

const user = mongoose.model('user',SignUpTemplate)

module.exports = user