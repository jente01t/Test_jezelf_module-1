import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let som = 0;
let nummer;

nummer = parseFloat(await userInput.question('Getal 1?'));
som = som + nummer 
nummer = parseFloat(await userInput.question('Getal 2?'));
som = som + nummer 
nummer = parseFloat(await userInput.question('Getal 3?'));
som = som + nummer 
nummer = parseFloat(await userInput.question('Getal 4?'));
som = som + nummer 

som = som / 4

console.log('het gemiddelde is ' + som);

process.exit();