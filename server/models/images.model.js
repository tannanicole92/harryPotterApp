const mongoose = require('mongoose');

const ImagesSchema = new mongoose.Schema({
    messageId: {
      type: String,
      required: [true]
    },
    name: {
      type: String,
      required: [true]
    }
}, { timestamps: true });

module.exports.Images = mongoose.model('Images', ImagesSchema);
