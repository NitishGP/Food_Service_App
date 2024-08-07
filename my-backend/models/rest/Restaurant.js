// models/Document.js
const mongoose = require('mongoose');
const ImageSchema = require('./Image');
const ReviewSchema = require('./Review');
const LocationSchema = require('./Location');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  isVeg: {
    type: Boolean,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  ratings: Number,
  numOfReviews:Number,
  location:[LocationSchema],

  
  reviews: [ReviewSchema], // Array of strings
  images: [ImageSchema],
  createdAt:String,
});

const Restaurant = mongoose.model('Restaurants', RestaurantSchema,'restaurants');

module.exports = Restaurant;
