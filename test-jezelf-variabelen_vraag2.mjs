import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let jeNaam = await userInput.question('Wat is je naam?');
let jeLeeftijd = parseFloat(await userInput.question('Wat is je leeftijd?'));

;
let geboortejaar;

geboortejaar = 2023 - jeLeeftijd

;

console.log('Hallo '+ jeNaam +'. Je bent geboren in: '+ geboortejaar);

process.exit();