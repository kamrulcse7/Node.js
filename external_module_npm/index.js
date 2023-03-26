//npm init
//npm install

const fruitsName = require('random-fruits-name');

console.log(fruitsName()); // Apple - English is default language
console.log(fruitsName("en")); // Apple - English
console.log(fruitsName("es")); // Manzana - Spanish
console.log(fruitsName("ja")); // りんご - Japanese
console.log(fruitsName("pt")); // Maça - Portuguese
console.log(fruitsName("nl")); // Appel - Dutch
console.log(fruitsName("fr")); // Pomme - French
console.log(fruitsName("de")); // Apfel - German
console.log(fruitsName("cs")); // Jablko - Czech


const moviesNames = require('movies-names');
console.log(moviesNames.all); //returns all movies
console.log(moviesNames.random()); //returns a random movie name
console.log(moviesNames.random(1)); //returns specified number of random movies
console.log(moviesNames.random('The Dark Knight')); //returns specified movie 
