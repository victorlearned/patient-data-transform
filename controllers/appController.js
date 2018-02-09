'user strict';

var Patient = require("../models/patient");
var resolvePath = require("../lib/resolvePath");

class AppController {

    constructor(config){
        this._config = config;
        this.getPatient = this.getPatient.bind(this);
    }

    getPatient(req, res) {
        let obj = req.body;
        let patient = new Patient();
        let val = '';

        for(let prop in this._config) {
            val = resolvePath(obj, this._config[prop], null);
            if(!val) {
                res.send({ error: "Resource " + prop + " for "+ this._config[prop] + " not found!"});
            }
    
            if(patient.hasOwnProperty(prop)) {
                patient[prop] = val;
            }
        }
    
        //Check date format
        if(isNaN(Date.parse(patient.dateOfBirth))) {
            res.send({ error: "Date not valid value for patientJson " +patient.dateOfBirth});
        }
    
        let dob = new Date(patient.dateOfBirth).toISOString();
        patient.dateOfBirth = dob;
        res.send(JSON.stringify(patient));
    }
}

module.exports = AppController;