//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     05-Oct-2022
  Updated:     05-Oct-2022
*/

require('./lesson.js.js');

//Code goes here


// TASK 2 CODE STARTS HERE
count = 0;
while (true) {
  count += 1;
  let die1 = Math.floor(Math.random()*6 + 1);
  let die2 = Math.floor(Math.random()*6 + 1);
  let die3 = Math.floor(Math.random()*6 + 1);
  console.log(die1 + " " + die2 + " " + die3);
  if (die1 + die2 == die3) {
    console.log("It took " + count + " rolls to find a match!")
    break;
  }
}
// TASK 2 CODE ENDS HERE

// TASK 3 CODE STARTS HERE 
let questionCount = 0;
while (true) {
  let num1 = Math.floor(Math.random()*9 + 1);
  let num2 = Math.floor(Math.random()*9 + 1);
  let product = num1*num2;
  let answer = parseInt(prompt(num1 + " x " + num2 + " = "));
  if (product == answer) {
    questionCount++;
  }
  else {
    console.log("oops!");
    console.log("You got " + questionCount + " questions correct!");
    break;
  }
}
// TASK 3 CODE ENDS HERE

