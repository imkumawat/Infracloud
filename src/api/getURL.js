const urls = require("../model/model")
const log = require('../log/log')

var cache = require('memory-cache');


async function getURL(req, res) {

    try {

        if (!req.params.code) {
            log.info("Short url id not found")
            return res.status(404).json({ message: 'No short url id found' })
        }




        var data

        if (data = cache.get(req.params.code)) {
            log.info("URL Found in Cache Memory")
            log.info(data)

            return res.redirect(`${data}`)

        }

        else {

            let obj = {}
            obj.ids = req.params.code
            let url = await urls.findOne(obj, { _id: 0, __v: 0, ids: 0 })



            if (url) {
                log.info("URL Found in Database")
                log.info(url)
                cache.put(req.params.code, url.longurl);
                return res.redirect(`${url.longurl}`)
            }

            else {

                log.info("No short url found in Database")
                return res.status(404).json({ message: 'Invalid Short URL' })
            }

        }


    }
    catch (e) {
        log.error(e)
        return res.status(500).josn({ message: "Internal Server Error" })
    }
}
module.exports = getURL