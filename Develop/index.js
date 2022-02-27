const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown");

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (title) => {
          if (title) {
            return true;
          } else {
            console.log("Please enter the title of your project");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Write a description of your project.",
        validate: (description) => {
          if (description) {
            return true;
          } else {
            console.log("Please enter a description for your project");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "Write detailed instructions on how to install your project.",
        validate: (installation) => {
          if (installation) {
            return true;
          } else {
            console.log("Please enter detailed instructions for your project");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Write information on how to use the application ",
        validate: (usage) => {
          if (usage) {
            return true;
          } else {
            console.log(
              "Please enter information on how to use the application "
            );
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "confirmContribution",
        message: "Did anyone help you with your project?",
        default: true,
      },
      {
        type: "input",
        name: "contribution",
        message: "Write the people who contributed to your project.",
        when: ({ confirmContribution }) => {
          if (confirmContribution) {
            return true;
          }
          return false;
        },
        validate: (contribution) => {
          if (contribution) {
            return true;
          } else {
            console.log(
              "Dont forget to add the people who helped with your project!"
            );
            return false;
          }
        },
      },
      {
        type: "input",
        name: "test",
        message: "Write instructions on how to run tests for your project.",
        validate: (usage) => {
          if (usage) {
            return true;
          } else {
            console.log("Please enter instructions for testing.");
            return false;
          }
        },
      },
      {
        type: "checkbox",
        name: "license",
        message: "Please select which licenses are used in your project.",
        choices: ["MIT", "GNU", "Eclipse", "Mozilla", "Apache", "Oracle"],
      },
      {
        type: "input",
        name: "githubUser",
        message: "Enter your github username.",
        validate: (githubUser) => {
          if (githubUser) {
            return true;
          }
          console.log("Please enter your github username!");
          return false;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the email you would like to be contacted with.",
        validate: (email) => {
          if (email) {
            return true;
          }
          console.log("You need to enter an email address.");
        },
      },
    ])
    .then(writeFile("README.md", generateMarkdown(data)));
};
promptUser();

const writeFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    FileSystem.writeFile("./dist" + fileName, data, err);
    if (err) {
      reject(err);
    }
    resolve({
      ok: true,
      message: "README file created! Check it out in the dist folder!",
    });
  });
};
