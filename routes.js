var express = require("express");
var xmlparser = require("express-xml-bodyparser");
var Patient = require("./models/patient");
var router = express.Router();

router.post("/", function(req, res) {
    const pat = new Patient("victor", "learned", "3234ds","12/18/1984");
    res.send(JSON.stringify(pat));
});

router.post("/patient", function(req, res) {
    res.send(req.body.first_name);
});

router.post('/receive-xml', xmlparser({trim: false, explicitArray: false}), function(req, res, next) {
        let patient = new Patient(req.body.tsadtout.patientdemographics.firstname, 
                            req.body.tsadtout.patientdemographics.lastname,
                            req.body.tsadtout.patientdemographics.patientuid,
                            req.body.tsadtout.patientdemographics.dob);
    //res.send(req.body.tsadtout.patientdemographics.firstname); 
    res.send(JSON.stringify(patient));
});

// app.post("/patientxml", function(req ,res) {
//     let patient = new Patient(req.body.tsadtout.patientdemographics.firstname, 
//                             req.body.tsadtout.patientdemographics.lastname,
//                             req.body.tsadtout.patientdemographics.patientuid,
//                             req.body.tsadtout.patientdemographics.dob);
//     //res.send(JSON.stringify(patient));
//     res.send(req.body.tsadtout.patientdemographics[0].firstname);
// });

module.exports = router;