'user strict';

var Patient = require("../models/patient");

const configPairing = {
    "first_name": "req.body.tsadtout.patientdemographics.firstname", 
    "last_name" : "req.body.tsadtout.patientdemographics.lastname",
    "external_id": "req.body.tsadtout.patientdemographics.patientuid",
    "date_of_birth": "body.tsadtout.patientdemographics.dob"
}


function getPatient(req, res) {
    let test = '';
    for(let prop in configPairing) {
        test = resolvePath(req, configPairing[prop], "nothing");
    }

    res.send(test);
}

const resolvePath = (object, path, defaultValue)=> path.split('.').reduce((o,p) => o ? o[p] : defaultValue, object);

module.exports = {
    getPatient: getPatient
};