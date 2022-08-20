// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  if(license === 'Boost') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  if(license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache') {
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`
  } 
  if(license === 'Boost') {
    return `[Boost](https://www.boost.org/LICENSE_1_0.txt)`
  } 
  if(license === 'BSD') {
    return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`
  } 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return '';
  } else {
    return `## License
  ${renderLicenseBadge(license)};
  This project is licensed under ${renderLicenseLink(license)};
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [License](#License)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Contributing
  ${data.contributing}
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
