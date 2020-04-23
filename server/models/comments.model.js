const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
    ownerId: {
      type: String,
      required: [true]
    },
    messageId: {
      type: String,
      required: [true]
    },
    message: {
      type: String,
      required: [true, "Comment is required"]
    }
}, { timestamps: true });

module.exports.Comments = mongoose.model('Comments', CommentsSchema);
