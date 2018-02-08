var express = require("express");
var xmlparser = require("express-xml-bodyparser");
var Patient = require("./models/patient");
var patientJsonController = require("./controllers/patientJsonController");
var patientXmlController = require("./controllers/patientXmlController");
var router = express.Router();

router.post("/patient", patientJsonController.getPatient);

router.post('/patient-xml', xmlparser({trim: false, explicitArray: false}), patientXmlController.getPatient);

module.exports = router;