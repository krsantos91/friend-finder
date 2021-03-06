// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var apiRoutes = require('./app/routing/apiRoutes.js');
var htmlRoutes = require('./app/routing/htmlRoutes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));

apiRoutes(app,path);
htmlRoutes(app,path);

// link Express App with Port to start sever
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });