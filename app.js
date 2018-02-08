var express = require("express");
var bodyParser = require('body-parser');
var xmlparser = require("express-xml-bodyparser");
var routes = require("./routes");
const Patient = require("./models/patient");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
//app.use(xmlparser());

// app.post("/", function(req, res) {
//     const pat = new Patient("victor", "learned", "3234ds","12/18/1984");
//     res.send(JSON.stringify(pat));
// });

// app.post("/patient", function(req, res) {
//     res.send(req.body.first_name);
// });

// app.post('/receive-xml', xmlparser({trim: false, explicitArray: false}), function(req, res, next) {
//         let patient = new Patient(req.body.tsadtout.patientdemographics.firstname, 
//                             req.body.tsadtout.patientdemographics.lastname,
//                             req.body.tsadtout.patientdemographics.patientuid,
//                             req.body.tsadtout.patientdemographics.dob);
//     //res.send(req.body.tsadtout.patientdemographics.firstname); 
//     res.send(JSON.stringify(patient));
// });

// // app.post("/patientxml", function(req ,res) {
// //     let patient = new Patient(req.body.tsadtout.patientdemographics.firstname, 
// //                             req.body.tsadtout.patientdemographics.lastname,
// //                             req.body.tsadtout.patientdemographics.patientuid,
// //                             req.body.tsadtout.patientdemographics.dob);
// //     //res.send(JSON.stringify(patient));
// //     res.send(req.body.tsadtout.patientdemographics[0].firstname);
// // });

app.listen(3000, function () {
    console.log("App started on port 3000");
});