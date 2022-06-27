//1. Prompt the user for password criteria
     //a. password length 8-128
     //b. uppercase, lowercase, numeric, special characters

//2.Validate input -between 8-128 and atleast one char type is being selected
// maybe this is while loop?
//while the number is between 1-128 do this

//3. generate the password

//4. display the password




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

///////////////////////////////////////////////



