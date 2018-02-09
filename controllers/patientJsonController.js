'user strict';

var AppController = require("./appController");

class PatientJsonController extends AppController {
    constructor(config) {
        super(config);
    }
}

module.exports = PatientJsonController;
// 'user strict';

// var Patient = require("../models/patient");
// var resolvePath = require("../lib/resolvePath");
// var configPairing = require("../configs/data");

// function getPatient(req, res) {
//     let patient = new Patient();
//     let val = '';
//     for(let prop in configPairing.configJsonPairing) {
//         val = resolvePath(req.body, configPairing.configJsonPairing[prop], null);
//         if(!val) {
//             res.send({ error: "Resource " + prop + " for "+ configPairing.onfigJsonPairing[prop] + " not found!"});
//         }

//         if(patient.hasOwnProperty(prop)) {
//             patient[prop] = val;
//         }
//     }

//     //Check date format
//     if(isNaN(Date.parse(patient.dateOfBirth))) {
//         res.send({ error: "Date not valid value for patientJson"});
//     }

//     let dob = new Date(patient.dateOfBirth).toISOString();
//     patient.dateOfBirth = dob;
//     res.send(JSON.stringify(patient));
// }

// module.exports = {
//     getPatient: getPatient
// };