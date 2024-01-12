const express = require("express");
const router = express.Router()
const userModel = require("../model/userModel")



router.get('/', async (req,res)=>{
    try{
        const users = await userModel.find();
        res.send(users)
    }
    catch(error){
        res.status(400).json(error)
     }
})



module.exports = router