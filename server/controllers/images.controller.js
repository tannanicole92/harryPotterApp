const { Images } = require('../models/images.model');

module.exports = {
  getImages: (req, res) => {
    Images.find({_id: req.params.id})
    .then(images => res.json(images))
    .catch(err => res.status(400).json(err));
  },

  deleteImage: (req, res) => {
    Images.deleteOne({_id: req.params.id})
      .then(image => res.json(image))
      .catch(err => res.status(400).json(err));
  },

  deleteAllImages: (req, res) => {
    Images.delete({messageId: req.params.id})
      .then(images => res.json(images))
      .catch(err => res.status(400).json(err));
  },

  newImage: (req, res) => {
    Images.create(req.body)
      .then(image => res.json(image))
      .catch(err => res.status(400).json(err));
  }
};
