//Homework 09 - Readme Generator
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");

const URL = "https://api.github.com/search/repositories?q=topic:ruby+topic:rails"
let readMe = "";

inquirer.prompt([
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
        message: "Provide a description of your project:",
        name: "description"
    },  

  ])
  .then(response => {
    readMe = `
    ${response.title}  

    Description: ${response.description}

    Table of Contents:

    Installation: What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


    Usage: Provide instructions and examples for use. Include screenshots as needed.

    Credits: List your collaborators, if any, with links to their GitHub profiles.
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    If you followed tutorials, include links to those here as well.

    License: The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use https://choosealicense.com/

    Badges: Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by shields.io. You may not understand what they all represent now, but you will in time.

    Contributing: If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.

    Tests: Go the extra mile and write tests for your application. Then provide examples on how to run them.

    GitHub profile picture:

    GitHub email address:

    Username: ${response.username}
    `
    fs.writeFile("README.md", readMe, function(err) {
      
      if (err ? console.log(err) : console.log("Success!"));

    })
  });