// inside of user.routes.js
const Comments = require('../controllers/comments.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get("/api/comments/:id", Comments.getComment);
  app.put("/api/comments/edit/:id", Comments.editComment);
  app.delete("/api/comments/delete/:id", Comments.deleteComment);
  app.get("/api/comments/message/:id", Comments.getAllComments);
  app.post("/api/comments/new", Comments.newComment);
}
