// Assignment code here
function generatePassword() {
    var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
    var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var lowercaseCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var uppercaseCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var possibleCharacters = [];

  // user input questions
  numberOfCharacters = prompt("How many characters would you like in your password? Choose between 8-128 characters.");
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Please choose a valid number of characters.";
  } else if (isNaN(numberOfCharacters)) {
    numberOfCharacters = prompt("Please enter a valid number.");
  }
  else {
    alert("Your password will be " + numberOfCharacters + " characters long.");
  }

  haveLowercase = confirm("Would you like lowercase characters in your password?");
  if (haveLowercase) {
      alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  haveUppercase = confirm("Would you like uppercase characters in your password?");
  if (haveUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  haveNumbers = confirm("Would you like numbers in your password?");
  if (haveNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  haveSpecial = confirm("Would you like special characters in your password?");
  if (haveSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  // group selected characters
  if (haveLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseCharacters);
  }
  if (haveUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseCharacters);
  }
  if (haveNumbers) {
    possibleCharacters = possibleCharacters.concat(numberCharacters);
  }
  if (haveSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  // pick random cards out of new pool for length of password
  let finalPassword = ""
  for (let i = 0; i < numberOfCharacters; i++) {
    let rng =[Math.floor(Math.random() * possibleCharacters.length)];
    // or finalPassword = possibleCharacters[rng];
    finalPassword = finalPassword +possibleCharacters[rng];
  }
  return finalPassword;
};

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
