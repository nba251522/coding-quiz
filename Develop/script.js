var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

function getRandomCharacter(string) {
    return string.charAt(Math.floor(Math.random() * string.length));
}

function shuffleString(string) {
    return string.split('').sort(function() { return 0.5 - Math.random() }).join('');
}

function generatePassword() {
    var generatedPassword = "";
    var passwordLength, includeLowercase, includeUppercase, includeNumber, includeSpecialCharacter;
    var numLowercase = 0, numUppercase = 0, numNumbers = 0, numSpecialCharacters = 0;

    while (true) {
        passwordLength = prompt("Enter password length between 8 and 128:");
        if (passwordLength >= 8 && passwordLength <= 128) {
            break;
        }
        alert("Password length must be between 8 and 128. Please enter a valid length.");
    }

    while (true) {
        includeLowercase = confirm("Include lowercase characters?");
        if (includeLowercase) {
            numLowercase = parseInt(prompt("Please enter the desired amount of lower case letters"));
        }

        includeUppercase = confirm("Include uppercase characters?");
        if (includeUppercase) {
            numUppercase = parseInt(prompt("Please enter the desired amount of upper case letters"));
        }

        includeNumber = confirm("Include numbers?");
        if (includeNumber) {
            numNumbers = parseInt(prompt("Please enter the desired amount of numbers"));
        }

        includeSpecialCharacter = confirm("Include special characters?");
        if (includeSpecialCharacter) {
            numSpecialCharacters = parseInt(prompt("Please enter the desired amount of special characters"));
        }

        if (!includeLowercase && !includeUppercase && !includeNumber && !includeSpecialCharacter) {
            alert("You must select at least one character type.");
            continue;
        }

        var totalCharacters = numLowercase + numUppercase + numNumbers + numSpecialCharacters;

        if (totalCharacters === parseInt(passwordLength)) {
            break;
        } else {
            alert("The total number of characters (" + totalCharacters + ") does not match the password length (" + passwordLength + "). Please try again.");
        }
    }

    for (var i = 0; i < numLowercase; i++) {
        generatedPassword += getRandomCharacter(lowercase);
    }

    for (var i = 0; i < numUppercase; i++) {
        generatedPassword += getRandomCharacter(uppercase);
    }

    for (var i = 0; i < numNumbers; i++) {
        generatedPassword += getRandomCharacter(numbers);
    }

    for (var i = 0; i < numSpecialCharacters; i++) {
        generatedPassword += getRandomCharacter(specialCharacters);
    }

    generatedPassword = shuffleString(generatedPassword);

    return generatedPassword;
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
