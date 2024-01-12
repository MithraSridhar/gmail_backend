const express = require("express");
const router = express.Router()
const emailModel = require("../model/emailModel");
const { set, ConnectionStates } = require("mongoose");


//get all emails
router.get('/', async (req,res)=>{
    try{
        const emails = await emailModel.find();
        res.send(emails)
    }
    catch(error){
        res.status(400).json(error)
     }
})

//get all emails of a user
router.post('/getUserEmail', async (req,res)=>{
    const emailTo = req.body.emailTo
    const sort = { _id:-1};
    try{
        const userEmails = await emailModel.find({emailTo:emailTo}).sort(sort);
        res.send(userEmails)
    }
    catch(error){
        res.status(400).json(error)
     }
})

//get all sent emails of a user
router.post('/getUserSentEmail', async (req,res)=>{
    const emailFrom = req.body.emailFrom
    const sort = { _id:-1};
    try{
        const userSentEmails = await emailModel.find({emailFrom:emailFrom}).sort(sort);
        res.send(userSentEmails)
    }
    catch(error){
        res.status(400).json(error)
     }
})


//send new email to user
router.post('/newEmail', async (req,res)=>{
    const email = req.body
    try{
        const newEmail = new emailModel(email);
        await newEmail.save();  
        res.send("Email sent successfully")
    }
    catch(error){
        res.status(400).json(error)
     }
})

//update email
router.post('/updateEmail', async (req,res)=>{
     console.log(req.body)
    try{
         const updateEmail = await emailModel.findOneAndUpdate({_id:req.body.emailId},req.body)
         res.send("Email updated successfully")
    }
    catch(error){
        res.status(400).json(error)
     }
})

//delete all spam emails
router.post('/deleteSpam', async (req,res)=>{
   try{
        const deleteSpam = await emailModel.deleteMany({emailTo:req.body.emailTo,isSpam:true})
        res.send("Spam emails deleted successfully")
   }
   catch(error){
       res.status(400).json(error)
    }
})

//delete all trash emails
router.post('/deleteTrash', async (req,res)=>{
    try{
         const deleteSpam = await emailModel.deleteMany({emailTo:req.body.emailTo,isTrashed:true})
         res.send("Trash emails deleted successfully")
    }
    catch(error){
        res.status(400).json(error)
     }
 })


module.exports = router