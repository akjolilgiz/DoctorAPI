import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './doctor.js';

// const Promise = require('es6-promise').Promise;

$(document).ready(function() {
    $("#searchByName").submit(function(event){
        event.preventDefault();
        $("#results").html("");
        let doctorName = $("#doctorName").val(); 
        let doctorList = new Doctor(); 
        let promise = doctorList.searchByName(doctorName);
    
        promise.then(function(response) {
          let body = JSON.parse(response);
            let result = body.data;
            if (result.length === 0){$("#results").append("There are no doctors that meet your criteria")}
            else {
            for(var i=0; i < result.length; i++) {
            $("#results").append("<h4>" + result[i].profile.first_name +" " + result[i].profile.last_name + "</h4>"+ "Phone number: " + result[i].practices[0].phones[0].number + "<br>" +  "<br>" + "<h5>" + "Address : " + "</h5>" + "City: " + result[i].practices[0].visit_address.city + "<br>" + "State: " + result[i].practices[0].visit_address.state + "<br>" + 
            "Street: " + result[i].practices[0].visit_address.street + "<br>" + 
            "Zip: " + result[i].practices[0].visit_address.zip + "<br>" +
            "Available: " + result[i].practices[0].accepts_new_patients + "<br>" + "<hr>");
            }
        }
        })
    });

    $("#searchBySymptoms").submit(function(event){
        event.preventDefault();
        $("#results").html("");
        let searchedSymptom = $("#symptom").val(); 
        let anotherDoctorList = new Doctor();
        let promise = anotherDoctorList.searchBySymptoms(searchedSymptom);
    
        promise.then(function(response) {
          let body = JSON.parse(response);
            let result = body.data;
            if (result.length === 0){$("#results").append("There are no doctors that meet your criteria")}
            else {
            for(var i=0; i < result.length; i++) {
            $("#results").append("First name : " +  result[i].profile.first_name + "<br>" +  "Last name : " + result[i].profile.last_name + "<br>"+ "Phone number: " + result[i].practices[0].phones[0].number + "<br>" + "Address : " + "<br>" + "City: " + result[i].practices[0].visit_address.city + "<br>" + "State: " + result[i].practices[0].visit_address.state + "<br>" + 
            "Street: " + result[i].practices[0].visit_address.street + "<br>" + 
            "Zip: " + result[i].practices[0].visit_address.zip + "<br>" + "<hr>");
            }   
        }
        })
    });
});
// visit_address:
// city: "Seattle"
// lat: 47.62154
// lon: -122.34014
// state: "WA"
// state_long: "Washington"
// street: "325 9th Ave"
// zip: "98104"
