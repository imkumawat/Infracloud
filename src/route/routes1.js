const express = require("express")

const router = express.Router()

const getURL = require("../api/getURL")

router.get('/:code', getURL)

module.exports = router