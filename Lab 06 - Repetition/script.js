//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      
  Created:     28-Sep-2022
  Updated:     28-Sep-2022
*/

require('./index.js');

let number = parseInt(prompt("Enter a number:"));

if (number < 1) {
  console.log("Enter a number larger than 0");
}
else {
  product = 1;
  storednumber = number
  while (number >= 1) {
    product*=number;
    number-=1;
  }
  console.log(storednumber + "! = " + product)
}

let begin = parseInt(prompt("Enter one number:"));
let end = parseInt(prompt("Enter a larger number:"));

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







