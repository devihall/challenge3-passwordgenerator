//1. Prompt the user for password criteria
 //a. password length 8-128
 //b. uppercase, lowercase, numeric, special characters
    
//2.Validate input -between 

//3. generate the password

//4. display the password

///////////////////////////////
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var upperCaseChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function generatePassword (){

lengthCheck ()

function lengthCheck (){
var lengthChar = window.prompt ("How many characters would you like to include in your password? Choose a number between 8 - 128.");let parsedChar = parseInt (lengthChar)
if (lengthChar<8) {window.alert ("Choose a number between 8-128") 
lengthCheck ()
}
else if (lengthChar >128){window.alert ("Choose a number between 8-128") 
lengthCheck ()
}
else {window.confirm ("Would you like to include lowercase charcters? if YES, click OK")
}
}
var lowercaseChar;
if (confirm("Would you like to include lowercase charcters? if YES, click OK")==true) { window.confirm ("Would you like to include uppercase charcters? if YES, click OK")

}





////////////////////////////////////////////////////



//var upperCaseChar = window.alert ("Would you like to include uppercase charcters? if YES, click OK")="ABCDEFGHIJKLMNOPQRSTUVWXYZ"


//var specialChar = window.alert ("Would you like to include special charcters? if YES, click OK")="!@#$%^&*()_+-="

//var numericChar = window.alert ("Would you like to include numeric charcters? if YES, click OK")="1234567890"

}

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



