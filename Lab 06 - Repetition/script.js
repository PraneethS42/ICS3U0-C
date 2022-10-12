//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     04-Oct-2022
  Updated:     04-Oct-2022
*/

require('./index.js');

// FACTORIAL CODE STARTS HERE -->
let number = parseInt(prompt("Enter a number:"));

if (number < 1) {
  console.log("Enter a number larger than 0");
}
else {
  product = 1;
  storednumber = number
  // loop down until reaches 1, multiply for factorials
  while (number >= 1) {
    product*=number;
    number-=1;
  }
  console.log(storednumber + "! = " + product)
}
// FACTORIAL CODE ENDS HERE -->

// ADDING CODE STARTS HERE -->
let begin = parseInt(prompt("Enter one number:"));
let end = parseInt(prompt("Enter a larger number:"));

// Compute the sum between the numbers, if end is smaller than begin throw error
if (begin > end) {
  console.log("Follow the rules!")
}
else {
  sum = 0;
  for (let i = begin; i <= end; i++) {
    sum += i;
  }
  console.log("The sum of the numbers in between (inclusive) is " + sum)
}
// ADDING CODE ENDS HERE -->







