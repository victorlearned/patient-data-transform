'user strict';

var Patient = require("../models/patient");
var resolvePath = require("../lib/resolvePath");

const configPairing = {
    "first_name": "first_name",
    "last_name": "last_name",
    "external_id": "patient_uid",
    "date_of_birth": "date_of_birth"
}

//const resolvePath = (object, path, defaultValue)=> path.split('.').reduce((o,p) => o ? o[p] : defaultValue, object);

function getPatient(req, res) {
    let patient = new Patient();
    let test = "";
    for(let prop in configPairing) {
        val = resolvePath(req.body, configPairing[prop], null);
        if(!val) {
            res.send({ error: "Resource " + prop + " for "+ configPairing[prop] + " not found!"});
        }

        if(patient.hasOwnProperty(prop)) {
            patient[prop] = val;
        }
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