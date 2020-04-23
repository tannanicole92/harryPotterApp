// inside of user.routes.js
const Images = require('../controllers/images.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get("/api/images/:id", Images.getImages);
  app.delete("/api/images/delete/:id", Images.deleteImage);
  app.post("/api/images/new", Images.newImage);
  app.delete("/api/images/message/delete/:id", Images.deleteAllImages);
}
