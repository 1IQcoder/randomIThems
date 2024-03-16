const Router = require('express')
const { Article, PageLoader } = require('../controllers/articleController')
const authMiddleware = require('../middlewares/authMiddleware')
const router = new Router

const article = new Article()
const pageLoader = new PageLoader()


router.get('/create', pageLoader.createLoader)
router.post('/create', article.create)

module.exports = router
























