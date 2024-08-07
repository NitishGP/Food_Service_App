const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    category:String,
    items:Array,
});

module.exports= ItemSchema;