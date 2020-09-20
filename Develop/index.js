const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require("./utils/generateMarkdown.js")
// array of questions for user
const questions = [];

function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of your project"
      },
      {
        type: "input",
        name: "description",
        message: "Enter a detailed description of your project"
      },
      {
        type: "input",
        name: "installation",
        message: "Enter detailed intallation instructions for this application"
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage information for this application"
      },
      {
        type: "list",
        name: "license",
        message: "Enter your GitHub Username",
        choices: ["MIT", "ISC", "GNU 2.0", "GNU 3.0", "BSD 2.0", "Apache 2.0"]
      },
      {
        type: "input",
        name: "contributing",
        message: "What contribution guidelines would you like to establish for potential collaborators?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username"
      },
      {
        type: "list",
        name: "contact",
        message: "What is the best way to contact you for further information on this project?",
        choices: ["email", "LinkedIn", "Slack"]
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address",
        when: (data) => data.contact === "email"
      },
      {
        type: "input",
        name: "linkedin",
        message: "Enter your LinkedIn URL",
        when: (data) => data.contact === "LinkedIn"
      },
      {
        type: "input",
        name: "slack",
        message: "Enter your slack username",
        when: (data) => data.contact === "Slack"
      },
    ]);
    
  }

  function licenseSwitcher (data) {
    switch (data.license)
    {
        case "MIT":
            return data.license = ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", data.license];
        case "ISC":
            return data.license = ["[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", data.license];;
        case "GNU 2.0":
            return data.license = ["[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)", data.license];
        case "GNU 3.0":
            return data.license = ["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", data.license];
        case "BSD 2.0":
            return data.license = ["[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", data.license];
        case "Apache 2.0":
            return data.license = ["[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0), data.license];", data.license];
    
    }
  }
  function contact (data) {
    if (data.contact === "email") {
      data.email = `### Email: ${data.email}`
    } else if (data.contact === "email") {
      data.linkedin = `### LinkedIn: ${data.linkedin}`
    } else if (data.contact=== "Slack") {
      data.slack = `### Slack: ${data.slack}`
    }
}



// function to initialize program
function init() {
 promptUser()
  // function to write README file


// Switch Function
.then(async function(data) {
  licenseSwitcher(data)
  contact(data)
    const readme = generateMarkdown(data);
    return writeFileAsync("README.md", readme);
})
.catch(function(err) {
  console.log(err);
});

}


// function call to initialize program
init();
