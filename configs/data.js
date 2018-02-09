const configJsonPairing = {
    "first_name": "first_name",
    "last_name": "last_name",
    "external_id": "patient_uid",
    "date_of_birth": "date_of_birth"
};

const configXmlPairing = {
    "first_name": "tsadtout.patientdemographics.firstname", 
    "last_name" : "tsadtout.patientdemographics.lastname",
    "external_id": "tsadtout.patientdemographics.patientuid",
    "date_of_birth": "tsadtout.patientdemographics.dob"
};

module.exports.configJsonPairing = configJsonPairing;
module.exports.configXmlPairing = configXmlPairing;