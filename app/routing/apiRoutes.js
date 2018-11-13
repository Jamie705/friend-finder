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
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware
        
        // // get user input object
        var userInput = req.body;
        console.log("Response body: " + JSON.stringify(userInput));

        //get scores
        var userScores = userInput.scores;
        console.log("userScores : " + userScores);

        //variable for best match
        bestMatch = {
            name:"",
            photo:"",
            }    


        // loop through existing friends array for scores and save to var
        for (var i = 0; i < friends.length; i++) {
 
            //compare current friends scores to user scores
            for (var j = 0; j < friends[i].scores[j]; j++) {
                  
            var compareScore = 0;
            
            compareScore += Math.abs(friends[i].scores[j] - userScores[j]);
            console.log("Difference is = " + friends[i].name - compareScore)
            

            var lowDiff = 40;
                if (compareScore === 0) {
                    console.log("You found the perfect match!" + compareScore);
                    console.log('Friends name = ' + friends[i].name);
                    console.log('Friends score = ' + friends[i].scores);
                    console.log('Friends photo = ' + friends[i].photo);

                    bestMatch.name = friends[i].name,
                    bestMatch.photo = friends[i].photo;

                    friends.push(userInput);
                    res.json(bestMatch);
                }
                
                // If lowest difference, record the friend match
                else if (compareScore < lowDiff){
                    console.log('Best match found = ' + compareScore);
                    console.log('Friends name = ' + friends[i].name);
                    console.log('Friends score = ' + friends[i].scores);
                    console.log('Friends photo = ' + friends[i].photo);

                    bestMatch.name = friends[i].name,
                    bestMatch.photo = friends[i].photo;                    
                    lowDiff = compareScore;

                    friends.push(userInput);
                    res.json(bestMatch);
                }
                else{
                    // Add new user
                    friends.push(userInput); 
                    res.end()
                }     
            };
        }
      
    });

    
    //     ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    // app.post("/api/clear", function (req, res) {
    //     // Empty out the arrays of data
    //     friendsData.length = [];

    //     res.json({ ok: true });
    // });
};