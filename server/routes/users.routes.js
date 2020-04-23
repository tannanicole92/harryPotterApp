// inside of user.routes.js
const Users = require('../controllers/users.controller');
const { authenticate } = require('../config/jwt.config');
module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  // this route now has to be authenticated\
  app.get("/api/users/:id", Users.getUser);
  app.put("/api/users/edit/:id", Users.editUser);
  app.delete("/api/users/delete/:id", Users.deleteUser);
  app.get("/api/users", Users.getAllUsers);
  //{ withCredentials: true }
  app.post("/api/logout", Users.logout);
}
