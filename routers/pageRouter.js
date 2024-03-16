const Router = require('express')
const router = new Router
const pageRenderObj = require('../models/PageRenderObject')

router.get('/', (req, res) => {
    res.render('heropage')
});

module.exports = router














