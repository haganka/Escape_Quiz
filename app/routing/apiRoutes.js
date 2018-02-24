var path = require("path");
var placesArr = require("../data/friends");

module.exports = function(app) {

    app.get("api/friends", function(req, res) {
        res.json(placesArr);
    })

    app.post("/api/answers", function(req, res) {
        var userVals = JSON.parse(req.body.scores);

        var userNums = userVals.map(function(i){
            return parseInt(i, 10);
        });

        var matchOne = 0;
        var matchTwo = 0;
        var matchThree = 0;
        var matchFour = 0;

        for (var i = 0; i < userNums.length; i++){
            matchOne += Math.abs(placesArr[0].scores[i] - userNums[i]);
            matchTwo += Math.abs(placesArr[1].scores[i] - userNums[i]);
            matchThree += Math.abs(placesArr[2].scores[i] - userNums[i]);
            matchFour += Math.abs(placesArr[3].scores[i] - userNums[i]);
        }

        var minDifference = Math.min(matchOne, matchTwo, matchThree, matchFour);
        var bestMatch;

        if(minDifference == matchOne){
            bestMatch = placesArr[0]
        }else if(minDifference == matchTwo){
            bestMatch = placesArr[1]
        }else if(minDifference == matchThree){
            bestMatch = placesArr[2]
        }else if(minDifference == matchFour){
            bestMatch = placesArr[3]
        };

        res.json(bestMatch);
  });

};