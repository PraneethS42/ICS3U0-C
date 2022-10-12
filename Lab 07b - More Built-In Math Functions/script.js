//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     06-Oct-2022
  Updated:     11-Oct-2022
*/

require('./index.js');

// TASK 1 CODE STARTS HERE -->
let amnt = parseInt(prompt("How many numbers are you entering?"));

// Set min and max as first numbers, compare the rest to them, also set sum as amx
let max = parseInt(prompt(""));
let min = max;
let sum = max;

// Change min and max accordingly
for (let i = 0; i < amnt - 1; i++) {
  let num = parseInt(prompt(""));
  sum += num
  max = Math.max(max, num);
  min = Math.min(min, num);
}

console.log("Largest : " + max);
console.log("Smallest : " + min);
console.log("Rounded average: " + Math.round(sum/amnt));
// TASK 1 CODE ENDS HERE -->


// TASK 2 CODE STARTS HERE -->
let a = parseInt(prompt("a ="));
let b = parseInt(prompt("b ="));
let c = parseInt(prompt("c ="));

// Compute using quadratic formula
console.log("x1 = " + (-b + Math.sqrt(Math.abs(b*b - 4*a*c)))/(2*a));
console.log("x2 = " + (-b - Math.sqrt(Math.abs(b*b - 4*a*c)))/(2*a));