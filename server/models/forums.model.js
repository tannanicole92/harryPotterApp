const mongoose = require('mongoose');

const ForumsSchema = new mongoose.Schema({
    ownerId: {
      type: String,
      required: [true]
    },
    topic: {
      type: String,
      required: [true, "Topic is Required"]
    },
    message: {
      type: String,
      required: [true, "Message is required"]
    },
    tags: {
      type: Array
    }
}, { timestamps: true });

module.exports.Forums = mongoose.model('Forums', ForumsSchema);
