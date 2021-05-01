// Assignment code here

var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var upperCaseSelected;
var numberSelected;
var specialCharSelected;

//Function used for password length

function computeLength() {
  passwordLength = prompt(
    "How many characters would you like your password to be (between 8-128 characters):"
  );

  if (passwordLength < 8) {
    alert("Password length must be greater than 8 characters");
    computeLength();
  } else if (passwordLength > 128) {
    alert("Password length must be greater than 128 characters");
    computeLength();
  }

  return passwordLength;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
