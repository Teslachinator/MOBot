const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://127.0.0.1:27017/';
const dbname = 'MOBot';

async function connectToDB() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db(dbname);
}

// .then((db) => {
//     console.log('Database connection successful!');
// })
// .catch((err) => {
//     console.log('Database connection error!');
// })

module.exports = {connectToDB};