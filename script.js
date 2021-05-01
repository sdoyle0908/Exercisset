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

// Function to determine whether user wants to use uppercase in password

function computeUpperCase() {
  upperCaseSelected = prompt("Do you want uppercase letters in your password?");
  upperCaseSelected = upperCaseSelected.toLowerCase();

  if (upperCaseSelected === "yes") {
    upperCaseSelected = true;
    return upperCaseSelected;
  } else if (upperCaseSelected === "no") {
    upperCaseSelected = false;
    return upperCaseSelected;
  }
  return upperCaseSelected;
}

// Funtion to determine whether user wants to use numbers in the password

function computeNumbers() {
  numberSelected = prompt("Do you want numbers ");

  if (numberSelected === "yes") {
    numberSelected = true;
    return numberSelected;
  } else if (numberSelected === "no") {
    numberSelected = false;
    return numberSelected;
  }
  return numberSelected;
}

//Function to determine whether user wants special characters in password

function computeSpecial() {
  specialCharSelected = prompt(
    "Do you want special characters in your password?"
  );
  specialCharSelected = specialCharSelected.toLowerCase();

  if (specialCharSelected === "yes") {
    specialCharSelected = true;
    return specialCharSelected;
  } else if (specialCharSelected === "no") {
    specialCharSelected = false;
    return specialCharSelected;
  }
  return specialCharSelected;
}

//Function used to gather inputs from other functions

function generatePassword() {
  computeLength();
  computeUpperCase();
  computeNumbers();
  computeSpecial();
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
