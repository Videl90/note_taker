//var bodyParser = require('body-parser'); express has a 
var express = require('express');
//var path = require('path');  we are not using this one here
//var fs = require('fs'); we are not using this one here
//var apiRoutes = require('./routing/api-routes.js');
//var htmlRoutes = require('./routing/html-routes.js');

//CHOSEN PORT
var app = express();
var PORT = process.env.PORT || 8080;


//BODYPARSER
//app.use(bodyParser.urlencoded({ extended: false })) // this must be from express build in urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json()) // I changed bodyParser for express...
//app.use(express.static(path.join(__dirname, '../public/css/styles.css')));
// we just need to pass the static folder here 
app.use(express.static("public"));

// ... yeah we don't need this, is just another way to do it
//app.use("/api", apiRoutes); 
//app.use("/", htmlRoutes);

//ROUTES
require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

//SERVER LISTEN
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})