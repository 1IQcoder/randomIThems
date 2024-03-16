const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')

class Article {

    async create(req, res) {
        try {
            const text = req.body

            if (req.files) {
                const { img } = req.files
                let fileName = uuid.v4() + '.jpg'
                img.mv(path.resolve(__dirname, '..', 'static', fileName))   
            }

            console.log(text.name)
            // if (article) {
            //     const content = JSON.parse(article)
            //     content.forEach(e => {
            //         console.log(e)
            //     });
            // }

            return res.status(200).json({ message: 'вроде все норм' })

        } catch (err) {
            console.log(err)
            return res.status(400).json({ message: err.message })
        }
    }

    // async edit(req, res) {
        
    // },

    // async delete(req, res){
    
    // }
}

class PageLoader {
    async createLoader(req, res) {
        res.render('createarticle')
    }
}

module.exports.Article = Article
module.exports.PageLoader = PageLoader


























