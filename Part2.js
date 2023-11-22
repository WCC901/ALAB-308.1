const fullDistance = 1500;
const budget = 175;
const costPerGallon = 3;

let mph55 = 30;
let mph60 = 28;
let mph75 = 23;

//Calculates how many gallons of fuel you'll
//need depending on how fast you go.
let totalGallons55 = fullDistance/mph55;
let totalGallons60 = fullDistance/mph60;
let totalGallons75 = fullDistance/mph75;

console.log(`Going 55mph, you'll need ${totalGallons55} galllons of fuel, for 60mph, ${totalGallons60} gallons, and 75mph, ${totalGallons75} gallons.\n`);

// Tells if the trip is affordable (True) or not (False)
let is55Affordable = budget >= (costPerGallon * totalGallons55);
let is60Affordable = budget >= (costPerGallon * totalGallons60);
let is75Affordable = budget >= (costPerGallon * totalGallons75);

console.log(`Is going 55 mph affordable?: ${is55Affordable}\nIs going 60 mph affordable?: ${is60Affordable}\nIs going 75 mph affordable?: ${is75Affordable}`);