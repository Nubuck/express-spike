var express = require('express')

var app = express()

app.use(function(req,res){
    console.log('spike app hit')
    res.send('hallo node')
})

app.listen(8080, '127.0.0.1')

console.log('app listening on post 8080')