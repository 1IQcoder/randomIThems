const jwt = require('jsonwebtoken')
const config = require('config')
const secretKey = config.get('secretKey')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        let token

        const tokenHeader = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null
        const tokenQuery = req.query.token || null

        if (!tokenHeader && !tokenQuery) {
            return res.render('login')
        }

        if (tokenHeader) {
            token = tokenHeader
        } else {
            token = tokenQuery
        }

        const tokenData = jwt.verify(token, secretKey)
        const userId = tokenData.id

        req.userId = userId

        next()

    } catch (err) {
        console.log(err)
        return res.render('login')
    }
}



























