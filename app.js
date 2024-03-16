const path = require('path')
const express = require('express')
const app = express()
const multer = require("multer");
const { connectToDb, getDb } = require('./db')
const pageRouter = require('./routers/pageRouter')
const authRouter = require('./routers/authRouter');
const accountRouter = require('./routers/accountRouter')
const articleRouter = require('./routers/articleRouter')
const errorHandler = require('./middlewares/ErrorHandlingMiddleware')
const { default: mongoose } = require('mongoose');
const config = require('config')
const fileUpload = require('express-fileupload')


const PORT = config.get('PORT')
let db

mongoose.connect(config.get('dbUrl'))

app.use(express.static(path.resolve(__dirname, 'static')))
// Настройки сервера
app.set('view engine', 'ejs')
// Указание папки со статическими файлами
app.use(express.static('public'))
// Парсинг JSON-тела запроса
app.use(express.json());
app.use(fileUpload({}))
// прослушивание роутера
app.use('/', pageRouter)
app.use('/auth', authRouter)
app.use('/account', accountRouter)
app.use('/article', articleRouter)

// Замыкающий middleware
// app.use(errorHandler)

// Mongo Data Base
connectToDb(err => {
    if (!err) {
        console.log(`Connected to Data Base`)
        db = getDb()
    } else {
        console.log(`DB connection eror: ${err}`)
    }
})

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на: http://localhost:${PORT} \nПерейдите по ссылке!`);
});





















































