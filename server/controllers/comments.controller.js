const { Comments } = require('../models/comments.model');

module.exports = {
  getComment: (req, res) => {
    Comments.findOne({_id: req.params.id})
    .then(comment => res.json(comment))
    .catch(err => res.status(400).json(err));
  },

  editComment: (req, res) => {
    Comments.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
      .then(updatedComment => res.json(updatedComment))
      .catch(err => res.status(400).json(err));
  },

  getAllComments: (req, res) => {
    Comments.find({messageId: req.params.id})
    .then(comments => res.json(comments))
    .catch(err => res.status(400).json(err));
  },

  deleteComment: (req, res) => {
    Comments.deleteOne({_id: req.params.id})
      .then(comment => res.json(comment))
      .catch(err => res.status(400).json(err));
  },

  newComment: (req, res) => {
    Comments.create(req.body)
      .then(comment => res.json(comment))
      .catch(err => res.status(400).json(err));
  }
};
