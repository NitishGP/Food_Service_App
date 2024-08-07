const mongoose = require('mongoose');
const ImageSchema = require('./Image');
const ReviewSchema = require('./Review');

const FoodSchema = new mongoose.Schema({
    name:String,
    price:Number,
    description:String,
    ratings:Number,
    images:[ImageSchema],
    stock:Number,
    numOfReviews:Number,
    reviews:[ReviewSchema],
    createdAt:String,
});

const Food = mongoose.model('Foods',FoodSchema,'food');
module.exports = Food;