const mongoose = require('mongoose')
const db = mongoose.connection;
mongoose.connect('mongodb://127.0.0.1:27017/blog')
db.on('error' , e=>{
    console.log(e);
}
)
db.once('open' , e=>{
    console.log('db connected')

})
module.exports = db;