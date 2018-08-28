
const noteUsers = require('./user_routes');
const noteRoutes = require('./note_routes');

module.exports = function(app, db) {
  noteUsers(app, db);
  noteRoutes(app);
  // Other route groups could go here, in the future
};