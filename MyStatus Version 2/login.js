const express = require('express')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const app = express()

//mongodb connection
mongoose.connect("mongodb://localhost:27017/users");
var db = mongoose.connection
//mongo error
db.on('error', console.error.bind(console, 'connection error:'));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, function(){
	console.log("Express server is listening on port", 3000);
});

