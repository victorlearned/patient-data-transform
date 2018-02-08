class Patient {
    constructor(firstName, lastName, id, dob) {
        this.first_name = firstName;
        this.last_name = lastName;
        this.external_id = id;
        //TODO: RFC3339 format
        this.date_of_birth = dob;
    }
}

module.exports = Patient;