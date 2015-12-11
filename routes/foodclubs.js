var express = require('express');
var router = express.Router();
var foodclub = require('../data/foodclubsmodel');


/* GET foodclubs. */
router.get('/foodclubs', function(req, res, next) {
    foodclub.find(function(err, data){
        if(err){
            console.error(err);
        }
        res.json(data);
    });
});

/* POST foodclubs. */
router.post('/createFoodclub', function(req, res) {
    var db = require('../app').db;
    db.collection('fantasmoland').insertOne({
        "month": req.body.month,
        "year": req.body.year,
        "place": req.body.place,
        "dish": req.body.dish,
        "dessert": req.body.dessert,
        "missing": req.body.missing,
        "guests": req.body.guests
    }, function(err, result){
        console.log("Inserted a document into the fantasmoland collection");
        res.send(200);
    });
});

/* POST remove foodclubs. */
router.post('/deleteFoodclub', function(req, res){
    foodclub.remove({_id:req.body.id}, function(err, records){
        if(err){
            console.log("Error" + err);
            res.send(400);
        }
        else{
            console.log("dish Removed");
            res.send(200);
        }
    });
});

module.exports = router;
