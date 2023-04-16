
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello.. I'm a bot from server");
})

module.exports = router
