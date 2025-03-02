const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const uri = 'mongodb+srv://lanoren1:FUJCN82iTsmTzCSy@cluster0.zhyz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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