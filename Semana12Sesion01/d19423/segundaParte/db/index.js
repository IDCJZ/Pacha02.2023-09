const { MongoClient } = require('mongodb')

var url = "mongodb+srv://rpineda:pacha2023@cluster0.tk3tvfe.mongodb.net/";
const connection = new MongoClient(url,);


module.exports = connection;