// DEPENDENCIES
var express = require("express");

// Tells node that we are creating an "express" server
var app = express();

//body parser
var bodyParser = require('body-parser');

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER

require("./app/routing/apiRoutes")(app);

require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
