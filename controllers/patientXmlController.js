'user strict';

var AppController = require("./appController");

class PatientXmlController extends AppController {
    constructor(config) {
        super(config);
    }
}

module.exports = PatientXmlController;

// 'user strict';

// var Patient = require("../models/patient");
// var resolvePath = require("../lib/resolvePath");
// var configPairing = require('../configs/data');

// function getPatient(req, res) {
//     let val = '';
//     let patient = new Patient();
//     for(let prop in configPairing.configXmlPairing) {
//         val = resolvePath(req.body, configPairing.configXmlPairing[prop], null);
//         if(!val) {
//             res.send({ error: "Resource " + prop + " for "+ configPairing.configXmlPairing[prop] + " not found!"});
//         }

//         if(patient.hasOwnProperty(prop)) {
//             patient[prop] = val;
//         }
//     }

//     //Check date format
//     if(isNaN(Date.parse(patient.dateOfBirth))) {
//         res.send({ error: "Date not valid value for patient XML"});
//     }

//     let dob = new Date(patient.dateOfBirth).toISOString();
//     patient.dateOfBirth = dob;
//     res.send(JSON.stringify(patient));
// }

// module.exports = {
//     getPatient: getPatient
// };