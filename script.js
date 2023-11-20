// Write your JavaScript code here!

window.addEventListener("load", function ()  {

let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);

        let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, 
            selectedPlanet.star, selectedPlanet.distance, 
            selectedPlanet.moons, selectedPlanet.imageUrl);
     // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
     })

    let pilot = document.querySelector("input[name=pilotName]");
   let copilot = document.querySelector("input[name=copilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel");
   let cargoLevel = document.querySelector("input[name=cargoMass]");
   let list = document.getElementById("faultyItems");
   let form = document.querySelector("form")
   list.style.visibility = "hidden"
   
   form.addEventListener("submit", function(event) {
    event.preventDefault();

    formSubmission(document,list,pilot.value,copilot.value,fuelLevel.value,cargoLevel.value);
        console.log(pilot.value);

    });
    return;
});