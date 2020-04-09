//Homework 09 - Readme Generator
const fs = require("fs");
var inquirer = require("inquirer");

var URL = "https://api.github.com/search/repositories?q=topic:ruby+topic:rails"

inquirer
  .prompt([
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

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });