
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  Comment:{
    type:String,
  }
});

module.exports = ReviewSchema;
