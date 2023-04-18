
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello.. I'm a bot from server - auth.js");
})

router.post('/register', (req, res) => {
    console.log(req.body)
    // res.send("Registration page is here")
    res.json({ message: req.body})              // If commented, will give "undefined"
})

module.exports = router
