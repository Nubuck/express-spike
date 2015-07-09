var express = require('express')

var app = express()

app.use(function(req,res){
    console.log('spike app hit')
    res.send('hallo node')
})

app.listen(8080, '0.0.0.0')

console.log('app listening on post 8080')