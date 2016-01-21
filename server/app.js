var express = require("express");
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var contact = require('./routes/contact');
var index = require('./routes/index');

app.set("port", process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/contact', contact);

app.use('/', index);

app.listen(app.get('port'), function(){
    console.log("Listening on port: ", app.get('port'));

});