const Router = require('express')
const router = new Router
const { check } = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')
const pageRenderObj = require('../models/PageRenderObject')
const { authController, pageLoader } = require('../controllers/authController')

// Страницы sign up / log in
router.get('/signup', pageLoader.signupPage)
router.get('/login', pageLoader.loginPage)
router.get('/users', authMiddleware, authController.getUsers)

router.post('/submit-login', authController.login)
router.post('/submit-signup', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен содержать от 6 до 10 символов').isLength({ min: 6, max: 10 })
], authController.registration)

module.exports = router




























