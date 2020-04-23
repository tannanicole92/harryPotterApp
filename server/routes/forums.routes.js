// inside of user.routes.js
const Forums = require('../controllers/forums.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = app => {
  app.get("/api/forums/:id", Forums.getForum);
  app.put("/api/forums/edit/:id", Forums.editForum);
  app.delete("/api/forums/delete/:id", Forums.deleteForum);
  app.get("/api/forums", Forums.getAllForums);
  app.get("/api/forums/user/:id", Forums.getAllUserForums);
  app.post("/api/forums/new", Forums.newForum);
}
