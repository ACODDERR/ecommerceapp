const express = require("express")
const router = express.Router()
const SignUp = require("../models/SignUpModel")
const bcrypt = require("bcrypt")

router.post('/signup',async (req,res) => {
    const saltPassword = await bcrypt.genSalt(10)
    const secureNumber = await  bcrypt.hash(req.body.number,saltPassword)
    const signedUpUser = new SignUp({
        name:req.body.name,
        email:req.body.email,
        number:secureNumber

    })
    signedUpUser.save()
    .then(data =>{
        res.json(data)
    })
    .catch(error =>{
        res.json(error)
    })
})


module.exports=router