var express = require("express");
var bodyParser = require('body-parser');
var xmlparser = require("express-xml-bodyparser");
var routes = require("./routes");


var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.listen(3000, function () {
    console.log("App started on port 3000");
});