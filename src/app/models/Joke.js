/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jokeSchema = new Schema({
  noun: {
    type: String,
    required: true,
  },
  adjective: {
    type: String,
    required: true,
  },
  // & numMoars = num times users press `moarpls`
  numMoars: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Joke', jokeSchema);
