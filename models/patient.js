"use strict";

class Patient {
    constructor(firstName, lastName, id, dob) {
        this.first_name = firstName || "";
        this.last_name = lastName || "";
        this.external_id = id || "";
        this.date_of_birth = dob || "";
    }

    set firstName(name) {
        this.first_name = name;
    }
    get firstName() {
        return this.first_name;
    }

    set lastName(last) {
        this.last_name = last;
    }

    get lastName() {
        return this.last_name;
    }

    set externalId(id) {
        this.external_id = id;
    }

    get externalId() {
        return this.external_id;
    }

    set dateOfBirth(dob) {
        this.date_of_birth = dob;
    }

    get dateOfBirth() {
        return this.date_of_birth;
    }
}

module.exports = Patient;