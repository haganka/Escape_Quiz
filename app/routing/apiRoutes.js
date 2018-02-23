var path = require("path");
var friendsArr = require("../data/friends");

module.exports = function(app) {

    app.get("api/friends", function(req, res) {
        red.json(friendsArr);
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
            matchOne += Math.abs(friendsArr[0].scores[i] - userNums[i]);
            console.log("match1", matchOne);
            matchTwo += Math.abs(friendsArr[1].scores[i] - userNums[i]);
            console.log("match2", matchTwo);
            matchThree += Math.abs(friendsArr[2].scores[i] - userNums[i]);
            matchFour += Math.abs(friendsArr[3].scores[i] - userNums[i]);
        }

        var minDifference = Math.min(matchOne, matchTwo, matchThree, matchFour);
        var bestMatch;

        if(minDifference == matchOne){
            bestMatch = friendsArr[0]
        }else if(minDifference == matchTwo){
            bestMatch = friendsArr[1]
        }else if(minDifference == matchThree){
            bestMatch = friendsArr[2]
        }else if(minDifference == matchFour){
            bestMatch = friendsArr[3]
        };

        res.json(bestMatch);
  });

};