// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var genre = {
  all: function(cb) {
    orm.all("genre", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("genre", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("genre", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (genreController.js).
module.exports = genre;