var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require('body-parser'),
    path = require('path'),
    foodclubs = require('./routes/foodclubs');

var app = express();
app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', (process.env.PORT || 3000));

app.get('/foodclubs', foodclubs);
app.post('/createFoodclub', foodclubs);
app.post('/deleteFoodclub', foodclubs);

mongoose.connect("mongodb://simon:1234@ds041154.mongolab.com:41154/fantasmoland");
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(callback){
  console.log("MongoDB connection established");
});

exports.db = db;

var server = app.listen(app.get('port'), function(){
  console.log("Listening on port " + app.get('port'));
});

