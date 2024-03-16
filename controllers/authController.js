const User = require('../models/User')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')
const pageRenderObj = require('../models/PageRenderObject')
const jwt = require('jsonwebtoken')
const config = require('config')

const generateAccessToken = (id) => {
    const payload = {
        id
    }
    return jwt.sign(payload, config.get('secretKey'), { expiresIn:"24h" })
}

class AuthController {

    async getUsers(req, res) { 
        res.json('есть пробитие')
    }

    async registration(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка при регистрации ', errors })
            }

            const { username, password, email } = req.body
            const candidate = await User.findOne({ email })

            if (candidate) {
                return res.status(400).json({ message: 'Этот e-mail уже занят!' })
            }

            const hashPassword = bcrypt.hashSync(password, 7)

            const user = new User({
                username: username,
                email: email,
                password: hashPassword
            })
            await user.save()

            res.json({ message: 'Аккаунт успешно зарегестрирован' })

        } catch (err) {
            console.log(err)
            res.status(400).json({ message: 'Registration error...' })
        }
    }

    async login(req, res) {
        try {
            const { username, password, email } = req.body
            const candidate = await User.findOne({ email })

            if (!candidate) {
                return res.status(400).json({ message: 'Аккаунта с таким e-mail не существует' })
            }

            const validPassword = bcrypt.compareSync(password, candidate.password)

            if (!validPassword) {
                return res.status(400).json({ message: 'Неверный пароль' })
            }
            
            const token = generateAccessToken(candidate._id)
            return res.status(200).json({
                token: token,
                user: {
                    username: candidate.username,
                    email: candidate.email,
                    password: candidate.password
                },
                message: {
                    text: 'Вы вошли в аккаунт',
                    green: true
                }
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: 'Logining error...' })
        }
    }
}

class PagesLoader {

    signupPage (req, res) {
        res.render('signup', pageRenderObj)
    }

    loginPage (req, res) {
        res.render('login', pageRenderObj)
    }

}

module.exports.authController = new AuthController()
module.exports.pageLoader = new PagesLoader()




























