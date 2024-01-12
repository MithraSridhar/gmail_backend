const  mongoose = require('mongoose')

const userSchema=mongoose.Schema(
    {
        firstName: {type: String,required: true},
        lastName: {type: String,required: true},
        userEmail: {type: String,required: true},
        password: {type: String,required: true},
        securityKey: {type: String,required: true},
        gender: {type: String,required: true}
    },
    {timestamps: true}
)

const userModel = mongoose.model("users", userSchema)

module.exports = userModel