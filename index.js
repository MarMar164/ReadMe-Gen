// TODO: Include packages needed for this application
const inquirer = require(inquirer);
const fs = require('fs');
// TODO: Create an array of questions for user input

let license = "MIT"

function generateBadgeForLicense() {
    if (license === "MIT")
        return "[![License: MIT]()]";
}


inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name',
            name: 'Name',
        },

        {
            type: 'checkbox',
            message: 'what languages are used',
            name: 'languages',
            choices: ["HTML","CSS","Javascript","python"]
        },

        {
            type: 'input',
            type: 'input',
            type: 'input',
        }
    ])

.then((response) => {
   
let readMeTemplate = `
# ${response.communication}
# ${response.languages}
# ${response.name}

## license
${generateBadgeForLicense()}
`

fs.writeFile('response.md', readMeTemplate, (err) =>
err ? console.error(err) : console.log('Success!')
);
})