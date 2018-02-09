var express = require("express");
var xmlparser = require("express-xml-bodyparser");
var router = express.Router();
var PatientJsonController = require("./controllers/patientJsonController");
var PatientXmlController = require("./controllers/patientXmlController");
var configs = require("./configs/data");

const patientJsonController = new PatientJsonController(configs.configJsonPairing);
const patientXmlController = new PatientXmlController(configs.configXmlPairing);

router.post("/patient", patientJsonController.getPatient);

router.post('/patient-xml', xmlparser({trim: false, explicitArray: false}), patientXmlController.getPatient);

module.exports = router;


// var express = require("express");
// var xmlparser = require("express-xml-bodyparser");
// var Patient = require("./models/patient");
// var patientJsonController = require("./controllers/patientJsonController");
// var patientXmlController = require("./controllers/patientXmlController");
// var router = express.Router();

// router.post("/patient", patientJsonController.getPatient);

// router.post('/patient-xml', xmlparser({trim: false, explicitArray: false}), patientXmlController.getPatient);

// module.exports = router;