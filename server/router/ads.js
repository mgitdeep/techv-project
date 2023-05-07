
const express = require('express')
const router = express.Router()

require('../db/conn')

const Ads = require('../model/adsSchema')

// Posting a product ad
router.post("/ad", async(req, res) => {

    const {name, category, price, isFree, condition, urll, location, description, advertiser_info, contact_info} = req.body

    if (!name || !category || !price || !condition || !location || !description || !advertiser_info || !contact_info) {
        return res.status(422).json({ error: "Please fill up the rest!"})
    } else {
        const ad = new Ads({name, category, price, isFree, condition, urll, location, description, advertiser_info, contact_info})

        await ad.save()

        console.log("Ad Posted Successfully :)")
        res.status(201).json({message: "Ad Posted Successfully :)"})
    }


})


// Getting the data from database
router.get('/ads', async (req, res) => {
    try {
      const ads = await Ads.find();
      res.json(ads);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });



module.exports = router