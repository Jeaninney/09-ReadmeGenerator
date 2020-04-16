// const licenseChoices = [
//     {
//         type: "MIT", 
//         badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
//     },
//     {
//         type: "APACHE 2.0",
//         badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
//      },
//      {
//         type: "GPL 3.0",
//         badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
//      },
//      {
//         type: "BSD3",
//         badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
//       },
//       {
//         type: "None"
//       }
//     ];

const licenseChoices = ["MIT", "APACHE 2.0", "GPL 3.0", "BSD3", "None"];

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

const questions = [
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
    }
]

// function writeToFile(fileName, data) {
//     writeFileAsync("README.md", generateMarkdown(response));
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


// const licenseBadges = licenseChoices.map(lic => {
//     thisObj
// });
//     [
//     {
//         type: "MIT", 
//         badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
//     },
//     {
//         type: "APACHE 2.0",
//         badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
//      },
//      {
//         type: "GPL 3.0",
//         badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
//      },
//      {
//         type: "BSD3",
//         badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
//       },
//       {
//         type: "None"
//       }
//     ];

const writeFileAsync = util.promisify(fs.writeFile);
let readMe = "";

function promptUser () {
 return inquirer.prompt(questions);
//     {
//       type: "input",
//       message: "What is your user GitHub username?",
//       name: "username"
//     },
//     {
//         type: "input",
//         message: "What is your project title?",
//         name: "title"
//       },
//     {
//         type: "input",
//         message: "Provide a short description of your project: ",
//         name: "description"
//     },  
//     {
//       type: "list",
//       message: "What kind of license should your project have? ",
//       name: "license",
//       choices: licenseChoices.type,
//       default: licenseChoices[2].type
//     },
//     {
//         type: "input",
//         message: "What command should be run to install dependencies? ",
//         name: "dependencies",
//         default: "npm i"
//     },
//     {
//         type: "input",
//         message: "What command should be run to run tests? ",
//         name: "tests",
//         default: "npm test"
//     },
//     {
//         type: "input",
//         message: "What does the user need to know about using the repo? ",
//         name: "usage"
//     },
//     {
//         type: "input",
//         message: "What does the user need to know about contributing to the repo? ",
//         name: "contributing"
//     }
//   ]);
}

// .then(response => {
//     axios
//       .get(`https://api.github.com/users/${response.username}`, config)
//       .then (res => {
//           const email = res.data.email;


function generateMarkdown(response, badge) {
    // const licBadge
  
            return `

# ${response.title}  
${badge} 
            
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
            
If you have any questions about the repo, open an issue or contact [${response.username}](https://api.github.com/users/${response.username}) directly at ${response.email}
            
`;
}

function init () {
    promptUser()
        .then((response) => {
            console.log(response);
            const badge = determineBadge(response.license);
            console.log(badge);
            return writeFileAsync("README.md", generateMarkdown(response, badge));
        }).then(() => {
            console.log("README generation was successful.");
        }).catch(error => console.log(error));
}
init();