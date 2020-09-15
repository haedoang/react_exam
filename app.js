var express = require('express')
var app = express();
var port = process.env.PORT || 8080;

var dotenv = require('dotenv');
var path = require('path');
var MySQL = require('./utils/db/mysql')

dotenv.config({path : path.join(__dirname,'.env')}); //배포시 경로 수정 

var penv = process.env
MySQL.initialize(penv);

app.get('/', (req, res)=> {
    res.send('welcome to sever ^^ ')
})



app.listen(port , ()=>{
    console.log(`server is running on ${port}`)
})



