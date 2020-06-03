//responsible for initializing the application database
const Nedb = require('nedb');

const db = new Nedb({
    filename: 'database.db',
    autoload: true
}) 

module.exports = db

