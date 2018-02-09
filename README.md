# patient-data-transform

To run: npm start

## Project
MedBridge wants to build a system to accept and store as many different types of patient data. A system exists to store the expected patient data but we must transform the different inputs to fit our expected data. Create a system which can parse the two example patient records provided and return the data formatted as described below. The solution should have 2 distinct endpoints, one for xml data & one for json data. The system will begin by using a small amount of data sent to it but we would like to be able to use more data in the future. We should be able to rerun previously sent data when we update the parsers to include new attributes. One goal of the system is to allow for the addition of new formats of input easily.

# Expected data
MedBridge's service that stores the patient data expects a JSON object with the list of fields that it can store. All dates should use RFC3339 as their format. All ids should be assumed to not always be numbers and should come over as strings. 

```json
{
    "first_name":"Steve", // Patient's first name 
    "last_name":"Test", // Patient's last name 
    "external_id":"123", // Unique ID provided by the EMR
    "date_of_birth":"2008-09-08T00:00:00-00:00" // Patient's dob
}
```

# Input data
## example_data/patient2.json
This data is a JSON input. The `patient_uid` should be used as the `external_id` on the expected data. 

## example_data/patient1.xml
This data is a xml data input. 
| xml path        | json attribute | 
| ------------- |:-------------:| 
| TSADTOUT.PatientDemographics.FirstName| first_name | 
| TSADTOUT.PatientDemographics.LastName | last_name  | 
| TSADTOUT.PatientDemographics.PatientUID | external_id |
| TSADTOUT.PatientDemographics.DOB | date_of_birth |
