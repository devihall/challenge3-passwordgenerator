// Get references to the #generate element
var generateBtn = document.querySelector("#generate");//(this is the generate id)




function generatePassword () {

//1. Prompt the user for password criteria
     //a. password length 8-128
    var promptLength = window.prompt(" How many characters would like the password to contain? Select a number between 8-128.")
        if (promptLength <8) {
          window.alert ("Choose a number between 8-128")
        }
        else confirmNumeric ("Do you want to include numeric characters? Click Ok to confirm.")

      }
                            

     
     //b. uppercase, lowercase, numeric, special characters
     //confirm (" Do you want to include numeric characters? Click Ok to confirm. ")
     //confirm (" Do you want to include lowercase letters? Click Ok to confirm. ")
     //conmfirm (" Do you want to include uppercase letters? Click Ok to confirm. ")
     //confirm (" Do you want to include special characters? Click Ok to confirm. ")


//2.Validate input -between 8-128 and atleast one char type is being selected

//3. generate the password

//4. display the password







  //return "generated password will go here"






// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //this function has not been defined- need to define it
  var passwordText = document.querySelector("#password");// this id is  the card that shows the generated password on the screen

  passwordText.value = password;

}

// Add event listener to generate button- this event listener is listening for button click on click it recalls function writePassword
generateBtn.addEventListener("click", writePassword);
