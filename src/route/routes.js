const express = require("express")

const router = express.Router()

const shortURL = require("../api/shortURL")
const getURL = require("../api/shortURL")
const allURLs = require("../api/allURLs")

router.get('/allurls/', allURLs)
router.post('/shorturl/', shortURL)
router.get('/geturl', getURL)

//router.get('/urlshortner/:urls', urlShortner)

module.exports = router