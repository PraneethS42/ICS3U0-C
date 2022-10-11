//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     06-Oct-2022
  Updated:     06-Oct-2022
*/

require('./index.js');

// TASK 1 CODE STARTS HERE -->
let amnt = parseInt(prompt("How many numbers are you entering?"));
let numbers = [];
let sum = 0;

// Inputs
for (let i = 0; i < amnt; i++) {
  numbers.push(parseInt(prompt("")));
}

// Calculations
let max = numbers[0]; let min = numbers[0];
for (let i = 0; i < amnt; i++) {
  sum += numbers[i]; 
  max = Math.max(max, numbers[i])
  min = Math.min(min, numbers[i])
}

// Outputs
console.log("Largest : " + max)
console.log("Smallest : " + min)
console.log("Rounded average: " + Math.round(sum/amnt))
// TASK 1 CODE ENDS HERE -->


// TASK 2 CODE STARTS HERE -->
let a = parseInt(prompt("a ="));
let b = parseInt(prompt("b ="));
let c = parseInt(prompt("c ="));

console.log("x1 = " + (-b + Math.sqrt(Math.abs(b*b - 4*a*c)))/(2*a))
console.log("x2 = " + (-b - Math.sqrt(Math.abs(b*b - 4*a*c)))/(2*a))