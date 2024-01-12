const  mongoose = require('mongoose')

const emailSchema=mongoose.Schema(
    {
        emailTo: {type: String,required: true},
        emailFrom: {type: String,required: true},
        senderName: {type: String,required: true},
        emailSubject: {type: String,required: true},
        emailContent: {type: String,required: true},
        emailDateTime: {type: String,required: false,default: new Date().toLocaleString() + "" },
        isSent: {type: Boolean,required: false},
        isImportant: {type: Boolean,required: false},
        isStarred: {type: Boolean,required: false},
        isSpam: {type: Boolean,required: false,default: false},
        isTrashed: {type: Boolean,required: false,default: false},
        read:{type: Boolean,required: false, default: false},
        draftEmail:{type: Boolean,required: false, default: false},
        
    },
    {timestamps: true}
)


const emailModel = mongoose.model("emails", emailSchema)

module.exports = emailModel