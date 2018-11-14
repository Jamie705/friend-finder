// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on  friends array
// ===============================================================================

var friends = require("../data/friends.js");
var bodyParser = require('body-parser');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users who their match is.

        // get user input object
        var userInput = req.body;
        console.log("Response body: " + JSON.stringify(userInput));

        //get scores
        var userScores = userInput.scores;
        console.log("userScores : " + userScores);

        //variable for best match
        var bestMatch = {
            name:"",
            photo:"",
            }    

        //variables
        //to compare scores with user input
        var compareScore = 0;
        
        //to store the scores in a list and total them together
        var scoreList = [];      
        var totalScore = 0;
        
         //to add the total to an array to later index the lowest score difference
        var totalFriendsScores = [];
        
        // loop through existing friends array for scores and save to var
        for (var i = 0; i < friends.length; i++) {
                // console.log(friends[i].name);
            
            //compare current friends scores to user scores
            for (var j = 0; j < friends[i].scores.length; j++) {
                compareScore = Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j]));
                console.log("compareScore: " + compareScore);

                //push difference to an array
                scoreList.push(parseInt(compareScore));
                    // console.log("This is the score list: " + scoreList);
             }    
                //add the scorelist total
                for (let k = 0; k < scoreList.length; k++) {
                    totalScore += scoreList[k];  
                        // console.log("This is the totalScore: " + totalScore);
                }

            // push the total scores from scorelist to a friends array
            totalFriendsScores.push(totalScore);
                // console.log("This is totalfriendsScores : " + totalFriendsScores)
            
            //clearing all scores for next itteration
            var compareScore = 0;
            var totalScore = 0;
            var scoreList = [];          
        
        }
        
        //go through array of scores and find min value
            // console.log("This is the total score Min: " + Math.min(...totalFriendsScores));
        var minScore = Math.min(...totalFriendsScores);

        //find index that will corespond to best match by placing min value variable
            // console.log("This is the index of the totalFriendsScores: " + totalFriendsScores.indexOf(minScore));
        var minScoreIndex = totalFriendsScores.indexOf(minScore);

        //attach best match name and photo to best match obj
        bestMatch.name = friends[minScoreIndex].name;
        bestMatch.photo = friends[minScoreIndex].photo;
            // console.log("The best matach is : " + bestMatch);
        
        //send best match obj to modal
        res.json(bestMatch);

        // Add new user to friends array
        friends.push(userInput);

    });
};