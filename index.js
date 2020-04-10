//Homework 09 - Readme Generator
const fs = require("fs");
const inquirer = require("inquirer");

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
    // {
    //   type: "input",
    //   message: "What is your password?",
    //   name: "password"
    // },
    // {
    //   type: "password",
    //   message: "Re-enter password to confirm:",
    //   name: "confirm"
    // }
  ])
  .then(function(response) {
    readMe = `
    Username: ${response.username}
    Project Title: ${response.title}
    Project Description: ${response.description}
    `
    fs.writeFile("README.md", readMe, function(err) {
      
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
      
    })
  });