'user strict';

var AppController = require("./appController");

class PatientJsonController extends AppController {
    constructor(config) {
        super(config);
    }
}

module.exports = PatientJsonController;