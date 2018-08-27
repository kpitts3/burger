var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.all(function(data) {
    //hbsObject = handlebars object
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create(
    req.body.burger_name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req,res) {
  var id = req.params.id;

  console.log("id", id);

  burger.update(id, function() {

    res.redirect('/');
  });
});

router.delete("/:id", function(req, res){
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    // if(result.changedRows == 0) {
    //   // If no rows were changed, id must not exit
    //   return res.status(404).end();
    // } else {
    //   res.status(200).end();
    // }
  });

});

// Export routes for server.js to use
module.exports = router;