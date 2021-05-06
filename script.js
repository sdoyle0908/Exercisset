// Assignment code here

var generateBtn = document.querySelector("#generate");

//Function used for password length

function computeLength() {
  var promptResponse = prompt(
    "How many characters would you like your password to be (between 8-128 characters):"
  );

  if (promptResponse == null) {
    alert("Password length is required.  Please Try again.");
    return undefined;
  }

  var parsed = Number.parseInt(promptResponse, 10);
  if (Number.isNaN(parsed)) {
    alert("Password length must be a number");
    return computeLength();
  }

  if (parsed < 8) {
    alert("Password length must be greater than 8 characters");
    return computeLength();
  } else if (parsed > 128) {
    alert("Password length must be less than 128 characters");
    return computeLength();
  }

  return parsed;
}

// Function to determine whether user wants to use uppercase in password
function computeUpperCase() {
  var promptResponse = prompt(
    "Do you want uppercase letters in your password? (Select OK for Yes or Cancel for No)"
  );

  if (promptResponse === null) {
    return undefined;
  }

  promptResponse = promptResponse.toLowerCase();

  return promptResponse === "yes";
}

// Funtion to determine whether user wants to use numbers in the password
function computeNumbers() {
  var promptResponse = prompt(
    "Do you want numbers?(Select OK for Yes or Cancel for No)"
  );

  if (promptResponse === null) {
    return undefined;
  }

  promptResponse = promptResponse.toLowerCase();

  return promptResponse === "yes";
}

//Function to determine whether user wants special characters in password
function computeSpecial() {
  var promptResponse = prompt(
    "Do you want special characters in your password? (Select OK for Yes or Cancel for No)"
  );
  if (promptResponse === null) {
    return undefined;
  }

  promptResponse = promptResponse.toLowerCase();

  return promptResponse === "yes";
}

//Var & Function used to gather inputs from other functions
function generatePassword() {
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

  var characters = lowerCase;

  var passwordLength = computeLength();
  if (passwordLength === undefined) {
    return;
  }

  var upperCaseSelected = computeUpperCase();
  if (upperCaseSelected === undefined) {
    return;
  }

  if (upperCaseSelected === true) {
    characters += upperCase;
  }

  var numberSelected = computeNumbers();
  if (numberSelected === undefined) {
    return;
  }

  if (numberSelected === true) {
    characters += numbers;
  }

  var specialCharSelected = computeSpecial();
  if (specialCharSelected === undefined) {
    return;
  }

  if (specialCharSelected === true) {
    characters += specialChar;
  }

  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
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
