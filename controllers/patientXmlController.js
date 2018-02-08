'user strict';

var Patient = require("../models/patient");

const configPairing = {
    "first_name": "body.tsadtout.patientdemographics.firstname", 
    "last_name" : "body.tsadtout.patientdemographics.lastname",
    "external_id": "body.tsadtout.patientdemographics.patientuid",
    "date_of_birth": "body.tsadtout.patientdemographics.dob"
}


function getPatient(req, res) {
    let val = '';
    let patient = new Patient();
    for(let prop in configPairing) {
        val = resolvePath(req, configPairing[prop], null);
        if(!val) {
            res.send({ error: "Resource " + prop + " for "+ configPairing[prop] + " not found!"});
        }

        if(patient.hasOwnProperty(prop)) {
            patient[prop] = val;
        }
    }

    //Check date format
    if(isNaN(Date.parse(patient.dateOfBirth))) {
        res.send({ error: "Date not valid value for patient XML"});
    }

    let dob = new Date(patient.dateOfBirth).toISOString();
    patient.dateOfBirth = dob;
    res.send(JSON.stringify(patient));
}

const resolvePath = (object, path, defaultValue)=> path.split('.').reduce((o,p) => o ? o[p] : defaultValue, object);

module.exports = {
    getPatient: getPatient
};