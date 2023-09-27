import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let Celcius = parseFloat(await userInput.question('Wat is de termperatuur in celcius?'));
let Farenheit = (Celcius * 9 / 5) +32

console.log(Farenheit);

process.exit();