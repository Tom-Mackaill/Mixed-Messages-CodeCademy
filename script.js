const planets = [
    'Mars', 'Jupiter', 'Earth', 'Saturn'
];

const marsFacts = [
    'Mars is sometimes refered to as the Red Planet',
    'Mars is red because of rusty iron in the ground',
    'Mars has seasons, polar ice caps, volcanoes, canyons, and weather'
];

const jupiterFacts = [
    'Jupiter is covered in swirling cloud stripes',
    'Jupiter has big storms like the Great Red Spot',
    'Jupiter is a gas giant and has no solid surface'
];

const earthFacts = [
   'Earth is not actually round',
   'Coral reefs are earths largest living structure',
   'The moon is drifting away from Earth' 
];

const saturnFacts = [
    'Saturn is huge',
    'Its rings are not solid',
    'You cannot stand on Satturn'
];

const generateRandomNumber = Math.floor(Math.random() * 17);

const randomMessage = () => {
    if (generateRandomNumber === 0){
        return planets[0]
    } else if (generateRandomNumber === 1){
        return planets[1]
    } else if (generateRandomNumber === 2){
        return planets[2]
    }
};

console.log(randomMessage())


