import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let koffie = parseFloat(await userInput.question('Hoeveel koppen koffie drinkt u per dag?')); 
let jaarKoffie = koffie * 365 

console.log('U drinkt ' + jaarKoffie + ' koppen koffie per jaar.')

process.exit();