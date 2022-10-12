//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        New File Generator (script.js)
  Purpose:     Generates a new file for use in the ICS3U course

  Author:      Praneeth Suryadevara
  Created:     12-Oct-2022
  Updated:     12-Oct-2022
*/

require('./lesson.js');

//Code goes here


// TASK 1 CODE STARTS HERE -->
let sentence1 = prompt("First sentence ")
let sentence2 = prompt("Second sentence ");

console.log("The first sentence in uppercase is: " + sentence1.toUpperCase());
console.log("The second sentence in lowercase is: " + sentence2.toLowerCase());

// CHecking starts and finishes of sentences with functions
sentence1 = sentence1.toLowerCase(); sentence2 = sentence2.toLowerCase(); // doesnt change results

if (sentence1.startsWith('a') || sentence1.startsWith('e') || sentence1.startsWith('i') || sentence1.startsWith('o') || sentence1.startsWith('u')) {
  console.log("The first sentence does start with a vowel.");
}
else {
  console.log("The first sentence does not start with a vowel.");
}

if (sentence1.endsWith('a') || sentence1.endsWith('e') || sentence1.endsWith('i') || sentence1.endsWith('o') || sentence1.endsWith('u')) {
  console.log("The first sentence does end with a vowel.");
}
else {
  console.log("The first sentence does not end with a vowel.");
}

if (sentence2.startsWith('a') || sentence2.startsWith('e') || sentence2.startsWith('i') || sentence2.startsWith('o') || sentence2.startsWith('u')) {
  console.log("The second sentence does start with a vowel.");
}
else {
  console.log("The second sentence does not start with a vowel.");
}

if (sentence2.endsWith('a') || sentence2.endsWith('e') || sentence2.endsWith('i') || sentence2.endsWith('o') || sentence2.endsWith('u')) {
  console.log("The second sentence does end with a vowel.\n");
}
else {
  console.log("The second sentence does not end with a vowel.\n");
}
// TASK 1 CODE ENDS HERE -->

// TASK 2 CODE STARTS HERE -->
let sentence3 = prompt("Sentence"); sentence3 = sentence3.toLowerCase();
let consonants = 0; let spaces = 0; let punctuation = 0; let vowels = 0;
for (character of sentence3) {
  if ("qwrtypsdfghklzxcvbnm".includes(character)) {consonants+=1;}
  if (" ".includes(character)) {spaces+=1;}
  if ("./<>?!,:;-_()[]\"\'".includes(character)) {punctuation+=1;}
  if ("aeiou".includes(character)) {vowels+=1;}
}
console.log("Consonants: "  + consonants); console.log("Spaces: "  + spaces); console.log("Punctuation: "  + punctuation); console.log("Vowels: "  + vowels);
