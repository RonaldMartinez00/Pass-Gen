// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate password function
function generatePassword() {
  // Prompt user for password length
  var passwordLength = parseInt(prompt("Hello! How many characters would you like for your password? Please choose a length of at least 8 characters and no more than 128 characters."));
  // Validate password length
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    passwordLength = parseInt(prompt("Invalid input. Please choose a password length of at least 8 characters and no more than 128 characters."));
  }

  // Prompt user for character types to include in password
  var includeLowercase = confirm("Would you like to include lowercase characters in your password?");
  var includeUppercase = confirm("Would you like to include uppercase characters in your password?");
  var includeNumeric = confirm("Would you like to include numeric characters in your password?");
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  // Validate character type selection
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must choose at least one character type to include in your password.");
    includeLowercase = confirm("Would you like to include lowercase characters in your password?");
    includeUppercase = confirm("Would you like to include uppercase characters in your password?");
    includeNumeric = confirm("Would you like to include numeric characters in your password?");
    includeSpecial = confirm("Would you like to include special characters in your password?");
  }

  // Set possible password characters
  var passwordCharacters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!@#$%^&*()_+-=[]{}|;':\"<>,./?\\~`"
  }
  // Set password to empty string
  var password = "";
  // Set password character array to empty array
  var passwordCharArray = [];
  // Add selected character types to password character array
  if (includeLowercase) {
    passwordCharArray = passwordCharArray.concat(passwordCharacters.lowercase.split(""));
  }
  if (includeUppercase) {
    passwordCharArray = passwordCharArray.concat(passwordCharacters.uppercase.split(""));
  }
  if (includeNumeric) {
    passwordCharArray = passwordCharArray.concat(passwordCharacters.numeric.split(""));
  }
  if (includeSpecial) {
    passwordCharArray = passwordCharArray.concat(passwordCharacters.special.split(""));
  }
  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    // Select a random character from the password character array
    var character = passwordCharArray[Math.floor(Math.random() * passwordCharArray.length)];
    // Append character to password
    password += character;
  }
  // Return password
  return password;
}

generateBtn.addEventListener("click", writePassword);
