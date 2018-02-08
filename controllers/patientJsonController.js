'user strict';

var Patient = require("../models/patient");

const configPairing = {
    "first_name": "first_name",
    "last_name": "last_name",
    "external_id": "patient_uid",
    "date_of_birth": "date_of_birth"
}


function getPatient(req, res) {
    let patient = new Patient();
    let test = "";
    for(let prop in configPairing) {
        if(!req.body[configPairing[prop]]) {
            res.send({ error: "Resource " + prop + " not found"});
        }
        patient[prop] = req.body[configPairing[prop]];
    }

    //Check date format
    if(isNaN(Date.parse(patient.dateOfBirth))) {
        res.send({ error: "Date not valid value for patientJson"});
    }

    let dob = new Date(patient.dateOfBirth).toISOString();
    patient.dateOfBirth = dob;
    res.send(JSON.stringify(patient));
}

module.exports = {
    getPatient: getPatient
};