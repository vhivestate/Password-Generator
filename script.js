// Assignment code here
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var userChoice = [];
var randomPass = [];

// Get references to #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var length = prompt("Choose a length for the password between 8 and 128 characters.");
  if (length < 8 || length > 128) {
    return
  };

  var lowercase = confirm("Would you like lowercase characters?");
  if (lowercase) {
    userChoice.push(...lowerChars)
  };

  var uppercase = confirm("Would you like uppercase characters?");
  if (uppercase) {
    userChoice.push(...upperChars)
  };

  var digits = confirm("Would you like numbers?");
  if (digits) {
    userChoice.push(...numbers)
  };

  var special = confirm("Would you like special characters?");
  if (special) {
    userChoice.push(...specChars)
  };
  
  for (var i=0; i<length; i++) {
    randomPass.push(userChoice[Math.floor(Math.random() * userChoice.length)])
  }
  
  var text = document.querySelector("#password");
  text.value = randomPass.join("");

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);