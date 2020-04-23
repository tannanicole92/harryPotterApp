const { Forums } = require('../models/forums.model');

module.exports = {
  getForum: (req, res) => {
    Forums.findOne({_id: req.params.id})
    .then(forum => res.json(forum))
    .catch(err => res.status(400).json(err));
  },

  editForum: (req, res) => {
    Forums.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
      .then(updatedForum => res.json(updatedForum))
      .catch(err => res.status(400).json(err));
  },

  getAllForums: (req, res) => {
    Forums.find()
    .then(forums => res.json(forums))
    .catch(err => res.status(400).json(err));
  },

  getAllUserForums: (req, res) => {
    Forums.find({ownerId: req.params.id})
    .then(forums => res.json(forums))
    .catch(err => res.status(400).json(err));
  },

  deleteForum: (req, res) => {
    Forums.deleteOne({_id: req.params.id})
      .then(forum => res.json(forum))
      .catch(err => res.status(400).json(err));
  },

  newForum: (req, res) => {
    Forums.create(req.body)
      .then(forum => res.json(forum))
      .catch(err => res.status(400).json(err));
  }
};
