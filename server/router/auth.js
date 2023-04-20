
const express = require('express')
const router = express.Router()

require('../db/conn')
const Users = require('../model/userSchema')

router.get("/", (req, res) => {
    res.send("Hello.. I'm a bot from server - auth.js");
})

router.post('/register', async(req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill up the rest!"})
    }

    try {
        const userExists = await Users.findOne({ email: email })
        if (userExists) {
            return res.status(422).json({ error: "Email already exist!"})
        }
        
        const user = new Users({name, email, phone, work, password, cpassword})

        const userRegister = await user.save()
        
        res.status(201).json({message: "User registered successfully!"})
        // if (userRegister) {
        //     res.status(201).json({message: "User registered successfully!"})
        // } else {
        //     res.status(500).json({error: "Failed to register!"})
        // }
 

    } catch(err) {
        console.log(err)
    }
    
})

module.exports = router
