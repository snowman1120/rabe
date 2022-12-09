const mongoose = require('mongoose');

const BidsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'properties'
  },
  commission: {
    type: Number,
    min: 1.5,
    max: 7,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('bids', BidsSchema);
