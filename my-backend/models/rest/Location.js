// models/Detail.js
const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  coordinates: [Number]
});

module.exports = LocationSchema;
