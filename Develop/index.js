const inquirer = require("inquirer");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "userName",
      message: "whats ur name?",
      validate: (userName) => {
        if (userName) {
          return true;
        } else {
          console.log("Please enter the name of your project");
          return false;
        }
      },
    },
    {},
  ]);
};
promptUser();
