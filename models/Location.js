const mongoose = require('mongoose');

const LocationsSchema = new mongoose.Schema({
  capName: {
    type: String,
    required: true
  },
  geoName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('locations', LocationsSchema);
