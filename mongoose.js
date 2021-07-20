const mongoose =require('mongoose')
const url = 'mongodb://127.0.0.1:27017/GOT'
const db=mongoose.connection

mongoose.connect(url, { useNewUrlParser: true})
db.once ('open', _ =>{
    console.log('data connection:', url)
})
db.on('error', err => {
    console.error('connection error:', err)
})