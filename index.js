// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

function generateBadgeForLicense(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)]";
    }
   else if (license === "MPL 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
    else if (license === "ODbL") {
        return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
    }
    else {
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
    }
}

inquirer
    .prompt([

        {
            type: 'input',
            message: 'Whats the Name of Project',
            name: 'readMeName',
        },
        {
            type: 'input',
            message: 'What is your name',
            name: 'Name',
        },
        {
            type: 'input',
            message: 'Give an intorduction to this project you are working on',
            name: 'Intro',
        },
        {
            type: 'checkbox',
            message: 'what languages are used',
            name: 'languages',
            choices: ["HTML", "CSS", "Javascript", "python"]
        },
        {
            type: 'list',
            message: 'what Licenses are used',
            name: 'Badges',
            choices: ["MIT", "MPL 2.0", "Zlib", "ODbL"]
        },
        {
            type: 'input',
            message: 'How Is This Program Used',
            name: 'Usage',
        },
        {
            type: 'Test',
            message: 'Librarrys and test needed and taken',
            name: 'test',
        },
        {
            type: 'checkbox',
            message: 'do you want contributions',
            name: 'cont',
            choices: ["yes","No"]
        },
        {
            type: 'input',
            message: 'Create a list of what all was installed to create said program',
            name: 'instillationInput',
        }
    ])

    .then((response) => {
        console.log(response)
        let readMeTemplate = `# ${response.readMeName}
---
## Table of Contents
* [Introduction](#Introduction)
* [Instructions](#Instructions)
* [Installation](#Installation)
* [Licensing](#Licensing)
* [Tests](#Tests)
* [Questions](#Questions)
* [Contributing](#Contributing)
---
## Introduction
### Project Created By ${response.Name}
### ${response.Intro}
### ${response.instillationInput} Was used to create this program
---
## Licensing Involved
${generateBadgeForLicense(response.Badges)}
---
## Instructions On How To Use 
### ${response.Usage}
---
## Tests
### ${response.test}
---
## Contributing
### ${response.cont} contributions at https://github.com/MarMar164
`
fs.writeFile('response.md', readMeTemplate, (err) =>
err ? console.error(err) : console.log('Success!')
)
})