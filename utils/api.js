const axios = require("axios");
const inquirer = require("inquirer");


const api = {
  axios
  .get(`https://api.github.com/users/${username}/repos?per_page=100`, config)
  .then (res => {
    
  })
  getUser(username) {

  }
};

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

module.exports = api;
