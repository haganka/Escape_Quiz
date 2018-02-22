var path = require("path");
var friendResults = require("../data/friends");

module.exports = function(app) {


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
            matchOne += Math.abs(friendResults[0].scores[i] - userNums[i]);
            matchTwo += Math.abs(friendResults[1].scores[i] - userNums[i]);
            matchThree += Math.abs(friendResults[2].scores[i] - userNums[i]);
            matchFour += Math.abs(friendResults[3].scores[i] - userNums[i]);
        }

        var minDifference = Math.min(matchOne, matchTwo, matchThree, matchFour);
        var bestMatch;

        if(minDifference == matchOne){
            bestMatch = friendsResults[0]
        }else if(minDifference == matchTwo){
            bestMatch = friendsResults[1]
        }else if(minDifference == matchThree){
            bestMatch = friendsResults[2]
        }else if(minDifferent == matchFour){
            bestMatch = friendResults[3]
        };

        res.json(bestMatch);
  });

};