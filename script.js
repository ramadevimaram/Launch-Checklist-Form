// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
//validation section
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      // if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
      //    alert("All fields are required!");
      //    // stop the form submission
      //   event.preventDefault();
      // }
      //user submits a value that is easily converted to the correct data type.
      //The pilot and co-pilot names should be strings 
      //and the fuel level and cargo mass should be numbers.
      //console.log(typeof cargoMass.value);
      
      let fuelLevelNumber=(Number(fuelLevel.value));
      //console.log(fuelLevelNumber);
      let cargoMassNumber=(Number(cargoMass.value));
      //console.log(typeof fuelLevelNumber);
      //event.preventDefault();
      //status Check before launch
      const faultyItems = document.getElementById('faultyItems');
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargoStatus');
      let launchStatus = document.getElementById('launchStatus');
      let data1 ='';
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
            alert("All fields are required!");
            // stop the form submission
         event.preventDefault();
         }else if(isNaN(fuelLevel.value || cargoMass.value)){
            alert("Make sure to enter valid information for each field");
         }else if(fuelLevelNumber < 10000){
            fuelStatus.innerText =`fuel level that ${fuelLevelNumber} is too low`;
            launchStatus.innerHTML="Shuttle Not Ready for Launch";
            launchStatus.style.color="Red";
            event.preventDefault();
         }else if(cargoMassNumber >10000){
            cargoStatus.innerHTML =`There is too much mass ${cargoMassNumber} for the shuttle to take off`;
            launchStatus.innerHTML="Shuttle Not Ready for Launch";
            launchStatus.style.color="Red";  
            event.preventDefault();
         } else{
            launchStatus.innerHTML="Shuttle is Ready for Launch";
            launchStatus.style.color="green"; 
               data1 +=
            `<ol>
                  <li>Pilot ${pilotName.value} is ready for Launch</li>
                  <li>Co-pilot ${copilotName.value} is ready for Launch</li>
                  <li>Fuel level ${fuelLevelNumber} for launch</li>
                  <li>Cargo ${cargoMassNumber}enough for launch</li>
               </ol>`;
               event.preventDefault();
         

      faultyItems.innerHTML = data1; 
         }
      event.preventDefault();
   });
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      return response.json();
      }).then(function(json){
      //console.log(json);
      const missionTarget = document.getElementById('missionTarget');
      let randomValue = '';
      let randomValue1='';
      for (let jsonData of json){
         console.log(jsonData);
         jsonData = json[Math.floor(Math.random() * json.length)];
         //console.log(jsonData)
       
      randomValue1 =
         `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${jsonData.name}</li>
               <li>Diameter: ${jsonData.diameter}</li>
               <li>Star: ${jsonData.star}</li>
               <li>Distance from Earth: ${jsonData.distance}</li>
               <li>Number of Moons: ${jsonData.moons}</li>
            </ol>
            <img src="${jsonData.image}"></img>`;
         
       }
       console.log(randomValue1)
      missionTarget.innerHTML = randomValue1;

      //event.preventDefault();
      
      });
      
      
   
 });

   


