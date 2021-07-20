const express = require('express')
const bodypraser = require('body-parser')
const app=express()
var postModel = require('./schema.js')
//mongoose
const mongoose =require('mongoose')
const { render } = require('ejs')
const url = 'mongodb://127.0.0.1:27017/test1'
const db=mongoose.connection
var ObjectId = require('mongoose').ObjectID;
//
app.set('views','./')
app.set('view engine', 'ejs')
app.use(bodypraser.urlencoded({extended: true}))
app.listen(3000, function(){
    console.log('listening in 3000')
})
//sending html to frontend
/*app.get('/', (req,res) => {
    //res.sendFile('/Users/LENOVO/Desktop/sem 4/webops_blockchain/ct/' + 'index.html')
    res.render('index', {})
})*/

/*gets the information from the the form the we have created using action comment '/qoute'
app.post('/quote', (req, res) =>{
    console.log(req.body)
})*/

//mongoose command

db.once ('open', _ =>{
    console.log('data connection:', url)
})
db.on('error', err => {
    console.error('connection error:', err)
})

mongoose.connect(url, { useNewUrlParser: true})
function runcode(req,res){
    app.post('/quote', (req, res) =>{
        //console.log(req.body)
        var newpost = new postModel();
        newpost.title= req.body.title;
        newpost.discription= req.body.discription;
        newpost.save(function(err,data){
            if(err){
                console.log(error);
            }
            else{
                //res.send("data inserted");
                console.log("yio")
                res.redirect('/');
            }        
        })
    }) 
    }

app.get('/', function(req,res){
    postModel.find()
        .then(result => {
            console.log('qwe')
            res.render('index.ejs',{post: result})
        })
    })

app.get('/find', async function (req,res){
    //console.log(req.body.idno)
    var fdpost = await postModel.findOne(_id == req.params.idno)
        console.log('opi')
        .then(fdpost => {
            console.log('zxc')
            res.render('index.ejs',{fpost: fdpost})
        })

});

runcode()
//.catch(error =>{console.error})

