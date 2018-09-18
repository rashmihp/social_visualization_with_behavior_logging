const MongoClient = require( 'mongodb' ).MongoClient
//const url = "mongodb://localhost:27017"
const url = "mongodb://app:abc123@ds261072.mlab.com:61072/aw_users"

let _client;
let _db;

const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
            if(err) return reject(err)
            _client = client;
            _db = client.db('aw_users')
            return resolve(_db)
        })
    })
}

const getDb = () => {
    return _db
}

const closeDb = () => {
    _client.close()
}

module.exports = {
    connectToDatabase : connectToDatabase,
    getDb : getDb,
    closeDb : closeDb
}
