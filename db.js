const { MongoClient} = require('mongodb')
const config = require('config')

const URL = config.get('dbUrl')

let dbConnection

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect(URL)
            .then((client) => {
                console.log('Connected to Mongo db')
                dbConnection = client.db()
                return cb()
            })
            .catch((err) => {
                return cb(err)
            })
    },
    getDb: () => dbConnection
}


























