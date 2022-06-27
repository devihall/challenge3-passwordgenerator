//1. Prompt the user for password criteria
    function generatePassword () {
    
      //a. password length 8-128
    
      var passwordLength= window.prompt ("Choose a password length between 8-128")
      if (passwordLength <8) {
        window.alert ("Choose a number between 8-128")}
        else (passwordLength >8) { 
          window.alert ("Do you want numeric characters in your password? ")
      }
    }
    

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



