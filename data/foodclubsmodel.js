var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var foodclubsSchema = new Schema({
    place: String,
    month: String,
    year: Number,
    dish: String,
    guests: String,
    missing: String,
    dessert: String
}, {collection: "fantasmoland"});

var foodclubsSchema = mongoose.model("foodclubsSchema", foodclubsSchema);

module.exports = foodclubsSchema;