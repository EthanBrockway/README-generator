// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `[![${license}](https://img.shields.io/badge/license-${license}-green)](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  let badges = [];

  if (licenses.length === 0) {
    return "";
  }
  licenses.forEach((license) => {
    if (license === "MIT") {
      badges.push("[MIT](https://choosealicense.com/licenses/mit/)");
    }
    if (license === "GNU") {
      badges.push("[GNU](https://choosealicense.com/licenses/agpl-3.0/)");
    }
    if (license === "Eclipse") {
      badges.push("[Eclipse](https://www.eclipse.org/legal/epl-2.0/)");
    }
    if (license === "Mozilla") {
      badges.push("[Mozilla](https://www.mozilla.org/en-US/MPL/2.0/)");
    }
    if (license === "Apache") {
      badges.push("[Mozilla](https://www.mozilla.org/en-US/MPL/2.0/)");
    }
  });

  let licenseString = "";
  badges.forEach((badge) => (licenseString += badge + "\n"));
  return licenseString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
 ${renderLicenseBadge(data.license)}
  # ${data.title}


  # Table of contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)


  ## Description

  ${data.description}
  
  ## Installation
  
   ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors

   ${data.contribution}

  ## Testing

   ${data.test}

   ## License

  ${renderLicenseLink(data.license)}

   ## Questions 

   If you have any other questions you can reach me at my email: ${data.email} 
   Or checkout my github profile at: [Github](https://github.com/${
     data.githubUser
   })
`;
}

function noContribution(data) {
  return `
 ${renderLicenseBadge(data.license)}
  # ${data.title}

  # Table of contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)


  ## Description

  ${data.description}
  
  ## Installation
  
   ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

   ${data.test}
   
   ## License

  ${renderLicenseLink(data.license)}

   ## Questions 

   If you have any other questions you can reach me at my email: ${data.email} 
   Or checkout my github profile at: [Github](https://github.com/${
     data.githubUser
   })
`;
}

module.exports = {
  generateMarkdown,
  noContribution,
};
