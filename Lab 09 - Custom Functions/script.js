//This is required to get input from the user in the console.
const readline = require('readline-sync');

//This section is needed for testing.
module.exports = {
  milesToKm,
  saleCalculator
}

/* **** DO NOT DELETE ABOVE THIS LINE **** */

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     17-Oct-2022
  Updated:     17-Oct-2022
*/

require('./lesson.js');

function milesToKm(distance) {
  if (distance < 0) {return undefined;}
  else {return Math.round(distance*1.60934*100)/100;}}
function saleCalculator(price, discount) {
  if (discount >= 100 || discount < 0 || price < 0) {return undefined;}
  else {return Math.round(price*(100-discount)/100*100)/100;}}
