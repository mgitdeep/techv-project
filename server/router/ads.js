
const router = express.Router()

require('../db/conn')

const Ads = require('../model/adsSchema')

// Posting a product ad
router.post("/ad", async(req, res) => {

    const {name, category, price, condition, image, location, description, advertiser_info, contact_info} = req.body

    if (!name || !category || !price || !condition || !image || !location || !description || !advertiser_info || !contact_info) {
        return res.status(422).json({ error: "Please fill up the rest!"})
    } else {
        const ad = new Ads({name, category, price, condition, image, location, description, advertiser_info, contact_info})

        await ad.save()

        console.log("Ad Posted Successfully :)")
        res.status(201).json({message: "Ad Posted Successfully :)"})
    }


})

module.exports = router