const urls = require("../model/model")
const log = require('../log/log')
async function getURL(req, res) {

    if (!req.params.code) {
        log.info("Short url id not found")
        return res.status(404).json({ message: 'No short url id found' })
    }

    let obj = {}
    obj.ids = req.params.code
    let url = await urls.findOne(obj, { _id: 0, __v: 0, ids: 0 })

    if (url) {
        log.info("URL Found")
        log.info(url)

        return res.redirect(`${url.longurl}`)
        // return res.status(200).json({ message: `Shortened URL: ${url.shorturl}` })
    }

    else {
        log.info("No short url found")
        return res.status(404).json({ message: 'Invalid Short URL' })
    }

}
module.exports = getURL