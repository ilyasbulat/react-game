const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const StatsSchema = new Schema({
  id: {
    type: Number,
  },
  difficult: {
    type: String,
  },
  time: {
    type: Number,
  },
});

const Stats = mongoose.model('stats', StatsSchema);

module.exports = Stats;
