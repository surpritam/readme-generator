// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', name: 'title', message: 'Enter your project title:' },
    { type: 'input', name: 'description', message: 'Enter your project description:' },
    { type: 'input', name: 'installation', message: 'Enter installation instructions:' },
    { type: 'input', name: 'usage', message: 'Enter usage information:' },
    { type: 'input', name: 'contributing', message: 'Enter contribution guidelines:' },
    { type: 'input', name: 'tests', message: 'Enter test instructions:' },
    { type: 'list', name: 'license', message: 'Choose a license for your application:', choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause'] },
    { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
    { type: 'input', name: 'email', message: 'Enter your email address:' }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data)
    .then(() => console.log('README.md has been generated successfully!'))
    .catch((err) => console.error('An error occurred while writing the file:', err))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((err) => console.log(err));
}

// Function call to initialize app
init();
