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

console.log(`Is going 55 mph affordable?: ${is55Affordable}\nIs going 60 mph affordable?: ${is60Affordable}\nIs going 75 mph affordable?: ${is75Affordable}\n`);

// Calculates the time (in hours)
// that the entire trip will TrackEvent.
let lengthOfTrip55 = (fullDistance/55);
let lengthOfTrip60 = (fullDistance/60);
let lengthOfTrip75 = (fullDistance/75);

console.log(`When traveling at 55 mph, the trip will be ${lengthOfTrip55} hours, at 60mph, ${lengthOfTrip60} hours, and at 75 mph, ${lengthOfTrip75} hours.\n`);

console.log("Based off the info, going 60mph seems to make the most sense as it's affordable and it'll get you there in good time.")