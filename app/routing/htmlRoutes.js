var path = require("path");
var places = require("../data/friends");

module.exports = function(app) {

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });

    app.get("/api/friends", function(req, res) {
        res.json(places);
    });
  
  
    // If no matching route, default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
  };

