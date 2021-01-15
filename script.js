// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var pwlength = parseInt(prompt("How many characters would you like your password to contain?"));
  var length = prompt ("password should be at least 8 characters and no more than 128 characters.");
  var charset = prompt ("password must include lowercase, uppercase, numeric, and/or special characters");
  var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+?><:{}[]",
        retVal = "";
        
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
  console.log(generatePassword);
  console.log();

// Add event listener to generate button
document.querySelector("#generate").addEventListener('click', writePassword);