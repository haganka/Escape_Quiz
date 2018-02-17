var path = require("path");

module.exports = function(app) {
//have not yet created logic, placeholders
    app.get("/api/answers", function(req, res) {
        res.json(userAnswers);
      });
  };