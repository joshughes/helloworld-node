var express = require('express')
var app = express()
var port = process.env.PORT || 3535
var path = require('path')
var morgan = require('morgan')

app.use(express.static(__dirname + '/public'))
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.set('views', path.join(__dirname, 'views'))
app.use(morgan('combined'))



app.get('/', function(req, res){
  res.render('index', {header: 'hello sample app'})
})

app.get('/ping', function(req, res){
  res.render('index', {header: 'pong'})
})

//change
app.listen(port, function (){
    console.log('App is listening on port ' + port)
})
