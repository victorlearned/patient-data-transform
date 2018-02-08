var express = require("express");
var bodyParser = require('body-parser');
const Patient = require("./models/patient");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/", function(req, res) {
    const pat = new Patient();
    res.send(JSON.stringify(pat));
});

app.post("/patient", function(req, res) {
    res.send(req.body.first_name);
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});