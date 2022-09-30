/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara 
  Created:     29-Sep-2022
  Updated:     29-Sep-2022
*/

// LESSON CODE BELOW ------>
//Code goes here
//name of variable  =  information
let name = "Duck"     //Words/Text -> String Data
let age = 16        //numerical Data
let had_lunch = false      //Boolean Data (T/F)

/*
console.log(name)
console.log(age)
console.log(had_lunch)
console.log("Hello " + name)
console.log(name + "'s age is " + age) 
console.log("Did the " + name + " have lunch? " + had_lunch + ".")
*/
// LESSON CODE FINISHED ------>


// TASK CODE --------->
let num1 = parseInt(prompt("Enter the first number:"))
let num2 = parseInt(prompt("Enter the second number:"))
let num3 = parseInt(prompt("Enter the third number:"))

let num_addition = num1 + num2
let num_squaredifference = num1*num1 - num2*num2
let product = num1*num2*num3

// Sum of the first two numbers
console.log("Adding numbers: " + num_addition)

// Multiplying all three numbers
console.log("Product of the three numbers: " + product)

// Average of numbers
console.log("The average of the three numbers is " + (num1+num2+num3)/3)

// Calculations with variables
console.log("The negative of the first number is " + num1*(num2-num1)/(num1-num2))
console.log("Random number: " + num_squaredifference)

const password = "HK124FEJ@K"
// password = password + "6"
console.log(password + "6")