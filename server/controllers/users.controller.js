const { Users } = require('../models/users.model');
const jwt = require("jsonwebtoken");
const { secret } = require('../config/jwt.config');
const bcrypt = require('bcrypt');

module.exports = {
  login: async(req, res) => {
    const user = await Users.findOne({ email: req.body.email });
    if(user === null) {
        return res.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if(!correctPassword) {
        return res.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
    res.cookie("usertoken", userToken, secret, { httpOnly: true }).json({
      msg: "success!", user: user, token: userToken
    });
  },

  register: (req, res) => {
    Users.create(req.body)
      .then(user => {
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        res.cookie("usertoken", userToken, secret, { httpOnly: true }).json({
          msg: "success!", user: user, token: userToken
        });
    })
    .catch(err => res.json(err));
  },

  logout: (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
  },

  getUser: (req, res) => {
    Users.findOne({_id: req.params.id})
    .then(user => res.json(user))
    .catch(err => res.status(400).json(err));
  },

  editUser: (req, res) => {
    Users.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
      .then(updatedUser => res.json(updatedUser))
      .catch(err => res.status(400).json(err));
  },

  getAllUsers: (req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err));
  },

  deleteUser: (req, res) => {
    Users.deleteOne({_id: req.params.id})
      .then(user => res.json(user))
      .catch(err => res.status(400).json(err));
  }
};
