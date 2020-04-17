//adds in the necessary utilities
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

//these are the choices I provide for licenses in the prompts
const licenseChoices = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "None"];

//these are the questions I ask in the prompts
const questions = [
    {
        type: "input",
        message: "What is your user GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your repo name in GitHub for this project?",
        name: "reponame"
    },
    {
          type: "input",
          message: "What is your project title?",
          name: "title"
    },
    {
          type: "input",
          message: "Provide a short description of your project: ",
          name: "description"
    },  
    {
        type: "list",
        message: "What kind of license should your project have? ",
        name: "license",
        choices: licenseChoices,
        default: licenseChoices[1]
    },
    {
          type: "input",
          message: "What command should be run to install dependencies? ",
          name: "dependencies",
          default: "npm i"
    },
    {
          type: "input",
          message: "What command should be run to run tests? ",
          name: "tests",
          default: "npm test"
    },
    {
          type: "input",
          message: "What does the user need to know about using the repo? ",
          name: "usage"
    },
    {
          type: "input",
          message: "What does the user need to know about contributing to the repo? ",
          name: "contributing"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

//this function assigns the badge based on the license that was selected
function determineBadge (licenseChoices) {
    let badge = "";
    switch (licenseChoices) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case "APACHE 2.0":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]";
            break;
        case "GPL 3.0":
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case "BSD3":
            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        default:
            badge = "";
    }
    return badge;
}

//this function passes my list of questions into the inquirer prompts
function promptUser() {
    return inquirer.prompt(questions);
}

//this function generates the markdown that gets written to the README
function generateMarkdown(response) {
    const badge = determineBadge(response.license);
    const badge2 = `[![LanguageCount](https://img.shields.io/github/languages/count/${response.username}/${response.reponame})](https://github.com/${response.username}/${response.reponame})`;
  
    return `

# ${response.title}  
${badge} 
${badge2}
            
## Description: 
${response.description}
         
## Table of Contents
       
* [Installation](#installation)
            
* [Usage](#usage)
            
* [License](#license)
            
* [Contributing](#contributing)
            
* [Tests](#tests)
            
* [Questions](#questions)
         
## Installation
            
To install necessary dependencies, run the following command:
            
\`\`\`
${response.dependencies}
\`\`\`
        
## Usage
            
${response.usage}
            
## License 
            
This project is licensed under the ${response.license} license.
            
## Contributing
            
${response.contributing}
            
## Tests
            
To run tests, run the following command:
            
\`\`\`
${response.tests}
\`\`\`
            
## Questions
            
<img src="https://github.com/${response.username}.png" alt="avatar" style="border-radius: 16px" width="30" />
            
If you have any questions about the repo, open an issue or contact [${response.username}](https://github.com/${response.username}) directly at ${response.email}
            
`;
}

//this is the function that kicks everything off
function init () {
    promptUser()
        .then((response) => {
            return writeFileAsync("./generated/README.md", generateMarkdown(response));
        }).then(() => {
            console.log("README generation was successful.");
        }).catch(error => console.log(error));
}
init();