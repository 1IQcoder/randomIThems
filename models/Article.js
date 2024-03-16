const {Schema, model} = require('mongoose')

const Article = new Schema({
    author: { 
        username: { type: String, required: true },
        email: { type: String, required: true },
        id: { type: String, required: true },
        icon: { type: String, required: false, default: '/icon' }
    },

    content: {
        title: { type: String, required: true },
        content: [{ type: String, required: true }]
    },

    data: {
        date: { type: String, required: true, timestamps: true },
        views: { type: Number },
        readtime: { type: Number },
        tags: [{ type: String }]
    },

    comments: [
        {
            author: { 
                username: { type: String, required: true },
                email: { type: String, required: true },
                id: { type: String, required: true },
                icon: { type: String, required: false, default: '/icon' }
            },
            comment: { type: String }
        }
    ]
})

module.exports = model('Article', Article)




















