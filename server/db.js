const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = '***REMOVED***';

const mongoConnect = (callback) => {
    MongoClient.connect(uri, {
        autoSelectFamily: false,
    })
.then(result => {
    console.log("✅ Connected to MongoDB");
    callback(result);
})
.catch(err => {
    console.log("❌ Connection error:", err);
});
}

module.exports = mongoConnect;