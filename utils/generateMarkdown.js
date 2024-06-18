// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// List of license options
const licenses = {
  'MIT': {
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
    notice: 'This project is licensed under the MIT License.'
  },
  'Apache 2.0': {
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    link: 'https://opensource.org/licenses/Apache-2.0',
    notice: 'This project is licensed under the Apache License 2.0.'
  },
  'GPL 3.0': {
    badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
    notice: 'This project is licensed under the GPL License 3.0.'
  },
  'BSD 3-Clause': {
    badge: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
    notice: 'This project is licensed under the BSD 3-Clause License.'
  }
};
function renderLicenseBadge(license) {
  if (licenses[license]) {
    return licenses[license].badge;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (licenses[license]) {
    return licenses[license].link;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (licenses[license]) {
    return `## License
${licenses[license].notice}`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For additional questions, you can reach me at:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
