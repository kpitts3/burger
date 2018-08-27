// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  all: function(cb) {
    var query = "SELECT * FROM burgers";
    connection.query(query, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    }); 
  },

  create: function(burger, cb) {
    var query = "INSERT INTO burgers (burger_name) VALUES (?)";

    console.log(query);

    connection.query(query, [burger], function(err,result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  update: function(id, cb) {
    var query = "UPDATE burgers SET devoured = true WHERE id = ?";

    console.log(query);
    connection.query(query, [id], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // Delete burger query
  delete: function(id, cb) {
    var query = "DELETE FROM burgers WHERE id = ?";

    console.log(query);
    connection.query(query, [id], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}

// Export the orm object for the model (burger.js).
module.exports = orm;