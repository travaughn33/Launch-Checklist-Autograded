// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

    let missionDestination = document.getElementById("missionTarget")

    missionDestination.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter:${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth:${distance} </li>
                     <li>Number of Moons:${moons} </li>
                 </ol>
                 <img src="${imageUrl}"> `
 }
 

function validateInput(testInput) {
    numberInput = Number(testInput);
    if( testInput === "") {
        return `Empty`;
    } else if(isNaN(numberInput)) {
        return `Not a Number`;
    } else if (isNaN(numberInput) === false) {
        return `Is a Number`;
    }
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    
        let pilotStatus = document.getElementById('pilotStatus');
        let copilotStatus = document.getElementById('copilotStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let launchStatus = document.getElementById('launchStatus');
        let cargoStatus = document.getElementById('cargoStatus');

        if(validateInput(pilot) === "Empty" || 
        validateInput(copilot) === "Empty" || 
        validateInput(fuelLevel) === "Empty" || 
        validateInput(cargoLevel) === "Empty") 
        { alert("All fields are required.")
        return; 

  }   else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" ||
   validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" )
    { alert("Please enter non-numerical data for pilot and copilot and numerial data for fuelLevel and cargoMass!")
        return;
    }  else {
                list.style.visibility = "visible"
                 pilotStatus.innerHTML =  `Pilot ${pilot} is ready for launch`;
                copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`
  
        if (fuelLevel < 10000) {
            list.style.visibility = "visible"
            fuelStatus.innerHTML = "Fuel level too low for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch"
            launchStatus.style.color = "red" }

             else if (cargoLevel > 10000 ) {
                list.style.visibility = "visible";
                cargoStatus.innerHTML = "Cargo mass too heavy for launch"
                fuelStatus.innerHTML = "Fuel level high enough for launch"
                launchStatus.innerHTML =  "Shuttle Not Ready for Launch"
                launchStatus.style.color =  "red" }

            else {
            list.style.visibility = "visible";
            fuelStatus.innerHTML = " Fuel level high enough for launch"
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle is Ready for Launch"
            launchStatus.style.color = 'green'  }

            
}
}
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
     return response.json();
         });
    return planetsReturned;
 }
 
 function pickPlanet(planets) {

    let planet = Math.floor(Math.random() * planets.length);
    
    return planets[planet]
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;