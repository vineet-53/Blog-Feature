const mongoose = require('mongoose')
require('dotenv').config()
const db = mongoose.connection;
mongoose.connect(process.env.DB_URL)
db.on('error' , e=>{
    console.log(e);
}
)
db.once('open' , e=>{
    console.log('db connected')

})
module.exports = db;