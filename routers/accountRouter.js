const Router = require('express')
const router = new Router
const pageRenderObj = require('../models/PageRenderObject')
const authMiddleware = require('../middlewares/authMiddleware')
const User = require('../models/User')
const bcrypt = require('bcrypt')

function loadPage(req, res) {
    res.render('profile', pageRenderObj)
}

async function loadProfile(req, res) {
    const userId = req.userId

    const candidate = await User.findOne({ _id: userId })

    if (!candidate) {
        return res.status(400).json({ message: 'Аккаунта с таким id не существует' })
    }
    
    return res.status(200).json({
        user: {
            username: candidate.username,
            email: candidate.email,
            password: '******'
        }
    })
}

router.get('/profile', loadPage)
router.post('/profile', authMiddleware, loadProfile)


module.exports = router
























