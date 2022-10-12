//This is required to get input from the user in the console.
// const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     30-Sep-2022
  Updated:     30-Sep-2022
*/

require('./index.js');

// MAIN CODE STARTS HERE -->
//inputting number
let grade = parseInt(prompt("Enter your grade from 0-100"))

// checking grades with conditional statements
  if (grade < 0 || grade > 100) {
    console.log("Invalid Grade.")
  }
  else if (grade >= 80) {
    console.log("Exceeding Expectations.")
  }
  else if (grade >= 70) {
    console.log("Meeting Expectations.")
  }
  else if (grade >= 50) {
    console.log("Needs Improvement.")
  }
  else {
    console.log("Not Passing.")
  }
// MAIN CODE STARTS HERE -->

// Challenge Code
let password = "AaronJudge9218"
let choice = prompt("Do you wish to change your password? Type yes or no: ")

// If password is requsted to be changed
if (choice == "Yes" || choice == "yes") {
  let newpassword = prompt("Enter your new password")
  password = newpassword
}

// Loops until password is guessed
while (true) {
  let input = prompt("Enter your password:")
  if (password == input) {
    console.log("You got the correct password!")
    break
  }
  else {
    console.log("Sorry, Try Again!")
  }
}
  
  