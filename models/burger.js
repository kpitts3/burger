// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all(function(res){
      cb(res);
    });
  },
  create: function(burger, cb) {
    orm.create(burger, function(res){
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update([id], function(res){
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete([id], function(res){
      cb(res);
    });
  }
};

// Export database functions for controller (burgers_controller.js
module.exports = burger;