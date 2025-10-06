// passwordGenerator.js -- Main code file!
//fix texts and write readme

const userArguments = process.argv.slice(2);

//variables generate password (length, lowercase, numbers, and default flag options)
var length = 8; //default length
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var useLowercase = false;
var useNumbers = false;

/**
 * Generates a random password based on the provided options.
 *
 * @param {number} length - The desired length of the password.
 * @param {boolean} useLowercase - Whether to include lowercase letters.
 * @param {boolean} useNumbers - Whether to include numbers.
 * @returns {string} The generated password.
 */

//function that generates password. Accepts length, useLowercase, and useNumbers as parameters
function generatePassword(length, useLowercase, useNumbers)
{
    let characters = "";
    //test would fail without this here, although it works fine in terminal
    if(length < 4 || length > 24)
    {
        throw new Error("Invalid length. Please enter a number between 4 and 24.");
    }

    if (useLowercase)
    {
        characters += lowercase;
    }
    if (useNumbers)
    {
        characters += numbers;
    }
    //If nothing is selected, default to lowercase
    if (characters === "")
    {
        characters = lowercase;
    }

    let password = "";
    for (let i = 0; i < length; i++)
    {
        let randomPass = Math.floor(Math.random() * characters.length);
        password += characters[randomPass];
    }
    return password;
}


//flag stuff
for (let i = 0; i < userArguments.length; i++)
{
    const args = userArguments[i];

    switch (args)
    {
        case "--help":
            console.log("Password Generator help");
            console.log("To use this program, you need to provide at least one of the following parameters in this format(node passwordGenerator.js --length X --lowercase -- numbers):");
            console.log("--length: enter the length of the password (between 4 and 24 characters, and the default length is 8)");
            console.log("--lowercase: typing --lowercase will include lowercase letters in the password");
            console.log("--numbers: typing --numbers will include numbers in the password");
            console.log(" If both lowercase and numbers are false, an error will be returned");
            console.log(" If neither lowercase or numbers are specified, lowercase  letters will be used by default");
            process.exit(0);
            break;

        case "--length":
            length = parseInt(userArguments[i +1], 10);
            if (isNaN(length) || length < 4 || length > 24)
            {
                throw new Error("Invalid length. Please enter a number between 4 and 24.");
            }
            i++
            break;

        case "--lowercase":
            useLowercase = true;
            break;

        case "--numbers":
            useNumbers = true;
            break;
    }
}
//default to lowercase if nothing is selected
if (!useLowercase && !useNumbers)
{
    useLowercase = true;
}

//This allows the password to be seen
var password = generatePassword(length, useLowercase, useNumbers);
console.log(`Generated Password: ${password}`);

module.exports = {
    generatePassword
}


