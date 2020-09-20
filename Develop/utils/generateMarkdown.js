// function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${data.license[0]}
  # ${data.title}
  ## Description
  >${data.description}
  <hr>

  ## Table of Contents
  #### [Installation](#Installation)
  #### [Usage](#Usage)
  #### [Contribution Guidelines](#Contribution-Guidelines)
  #### [License](#License)
  #### [Contact](#Contact)

  
  ## Installation
  >${data.installation}
  <hr>
  
  ## Usage
  >${data.usage}
  <hr>

  ## Contribution Guidelines
  >${data.contributing}
  <hr>

  ## License
  >${data.license[1]}
  >${data.license[0]}
  <hr>

  ## GitHub

  ## Contact
  >${data.email}
  >${data.linkedin}
  >${data.slack}

`;
}

module.exports = generateMarkdown;
