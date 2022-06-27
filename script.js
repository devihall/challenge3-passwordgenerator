//1. Prompt the user for password criteria
//a. password length 8-128
//b. uppercase, lowercase, numeric, special characters

//2.Validate input -between 

//3. generate the password

//4. display the password

///////////////////////////////
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz"
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specialChar = "!@#$%^&*()_+-="
var numericChar = "1234567890"

function generatePassword() {

  var passwordLength = lengthCheck ()
//console.log (passwordLength)

  function lengthCheck() {
    var lengthChar = window.prompt("How many characters would you like to include in your password? Choose a number between 8 - 128."); 
    let parsedChar = parseInt(lengthChar)
    if (parsedChar < 8) {
      window.alert("Choose a number between 8-128")
      return lengthCheck()
    }
    else if (parsedChar > 128) {
      window.alert("Choose a number between 8-128")
      return lengthCheck()
    }
    else {
     return parsedChar
    }
  
    console.log ("hello")
  }
  
  var userVariables = ""

  
  if (confirm("Would you like to include lowercase charcters? if YES, click OK")===true){
  userVariables+=lowercaseChar 
  } 

  if (confirm("Would you like to include uppercase charcters? if YES, click OK")===true){
    userVariables+=uppercaseChar 
    } 

  if (confirm("Would you like to include special charcters? if YES, click OK")===true){
      userVariables+=specialChar 
      } 
  if (confirm("Would you like to include numeric charcters? if YES, click OK")===true){
        userVariables+=numericChar 
        } 
  
  function randomizer() {
  
  
  var password ="";
  for (var i=0; i<passwordLength; i++) {
    var randomNum =math.floor(math.random() * passwordLength.length);
    password = password + passwordLength [randomNum]
  }
}  
  
////////////////////////////////////////////
//if statements for other types of characters
//we will use the userVariables as our "array" for the math.random function 
//var randomNum=math.floor(math.random()*passwordLength)
//var char =userVariable[randomNum]
// for loop the math.random logic i< passwordLength
////////////////////////////////////////////////////


return userVariables
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



