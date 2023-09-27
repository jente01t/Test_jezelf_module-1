import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let naam;
let geboorteJaar;
let huidigJaar;
let leeftijd;
let otput;

naam = await userInput.question('Wat is je naam?');
// We vragen de gebruiker achter hun naam

geboorteJaar = parseFloat(await userInput.question('Wat is je geboortejaar?'));
// We vragen de gebruiker achter het jaar waarin ze geboren zijn

huidigJaar = 2023
// We definiëren wat het huidige jaar is, we vragen het dus niet aan onze gebruiker

leeftijd = huidigJaar - geboorteJaar
// We berekenen hier de leeftijd van de gebruiker

otput = "Hallo " + naam + ", je bent " + leeftijd + " jaar" 
// We zorgen ervoor dat we in output iets steken dat lijkt op "Hallo Kevin, je bent 34 jaar"

console.log(otput);
// Geef de output weer aan de gebruiker

process.exit();