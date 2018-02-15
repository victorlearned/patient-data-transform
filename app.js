var express = require("express");
var bodyParser = require('body-parser');
var xmlparser = require("express-xml-bodyparser");
var routes = require("./routes");
var path = require("path");

var app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

//catch 404 and forwarding to error handling
app.use(function(req, res, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});

//production error handler
//no stacktraces leaked to user
app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


app.listen(3000, function () {
    console.log("App started on port 3000");
});