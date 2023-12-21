/* eslint-disable prefer-destructuring */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memeSchema = new Schema({
  // & String URL received from OpenAI Images API
  memePic: {
    type: String,
    required: true,
  },
  // & Array to store memePic URL's; index = numMoars
  allMemePics: {
    type: Array,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Meme', memeSchema);
