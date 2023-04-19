
const express = require('express')
const router = express.Router()

require('../db/conn')
const Users = require('../model/userSchema')

router.get("/", (req, res) => {
    res.send("Hello.. I'm a bot from server - auth.js");
})

router.post('/register', (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body

    // The below "if-else" is okay, but this is more efficient 
    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill up the rest!"})
    }

    Users.findOne({ email: email }).then((userExists) => {
        if(userExists) {
            return res.status(422).json({ error: "Email already exist!"})
        }

        // Else we're going to save the newly registred user data into Database
        const user = new Users({name, email, phone, work, password, cpassword})
        user.save().then(() => {
            res.status(201).json({message: "User registered successfully!"})
        }).catch((err) => {
            res.status(500).json({error: "Failed to register!"})
        })

    }).catch((err) => {
        console.log(err)
    })

    // if (name && email && phone && work && password) {
    //     console.log(name)
    //     console.log(email)
    // } else {
    //     return res.status(422).json({ error: "Please fill up the rest!"})
    // }
    // console.log(req.body)
    // console.log(req.body.name)
    // console.log(req.body.email)
    // console.log(name)
    // console.log(email)
    // console.log(work)
    // res.send("Registration page is here")
    res.json({ message: req.body})              // If commented, will show "loading" in Postman
})

module.exports = router
