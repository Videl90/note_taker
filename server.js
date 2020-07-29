var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var fs = require('fs');
var apiRoutes = require('./routing/api-routes.js');
var htmlRoutes = require('./routing/html-routes.js');

//CHOSEN PORT
var app = express();
var PORT = process.env.PORT || 8080;


//BODYPARSER
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../public/css/styles.css')));

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

//ROUTES
//require('./routing/api-routes.js')(app);
//require('./routing/html-routes.js')(app);


//SERVER LISTEN
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
})