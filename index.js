// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
//Homework 09 - Readme Generator
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

// const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
const licenseChoices = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "None"];
const licenseBadges = [""];
const writeFileAsync = util.promisify(fs.writeFile);
let readMe = "";

function promptUser () {
 return inquirer.prompt([
    {
      type: "input",
      message: "What is your user GitHub username?",
      name: "username"
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
      default: licenseChoices[2]
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
    }
  ]);
}

// .then(response => {
//     axios
//       .get(`https://api.github.com/users/${response.username}`, config)
//       .then (res => {
//           const email = res.data.email;


function generateMarkdown(response) {
  
            return `

# ${response.title}  
${response.license} 
            
## Description: 
${response.description}
         
## Table of Contents
       
* [Installation] (#installation)
            
* [Usage] (#usage)
            
* [License] (#license)
            
* [Contributing] (#contributing)
            
* [Tests] (#tests)
            
* [Questions] (#questions)
         
## Installation
            
To install necessary dependencies, run the following command:
            
\`\`\`
${response.dependencies}
\`\`\`
        
## Usage
            
${response.usage}
            
## License 
            
badges  shields.io
            
## Contributing
            
${response.contributing}
            
## Tests
            
To run tests, run the following command:
            
\`\`\`
${response.tests}
\`\`\`
            
## Questions
            
<img src="https://github.com/${response.username}.png" alt="avatar" style="border-radius: 16px" width="30" />
            
If you have any questions about the repo, open an issue or contact [${response.username}] (https://api.github.com/users/${response.username}) directly at ${response.email}
            
`;
}

function init () {
    promptUser()
        .then((response) => {
            return writeFileAsync("README.md", generateMarkdown(response));
        }).then(() => {
            console.log("README generation was successful.");
        }).catch(error => console.log(error));
}
init();