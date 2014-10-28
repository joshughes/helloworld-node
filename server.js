var express = require('express')
var app = express()
var port = process.env.PORT || 3535
app.get('/', function(req, res){
  var test = JSON.stringify({status: 200, route: '/', message: 'success'})
  console.log(test)
  res.send('hello world')
})
//change
app.listen(port, function (){
    console.log('App is listening on port ' + port)
})
