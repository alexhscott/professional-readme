// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How can I install this?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What features would you want other people to contribute to in the future?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['Apache', 'Boost', 'BSD', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            var markdown = generateMarkdown(answers)
            console.log(markdown);
            writeToFile('README.md', markdown)
        });
}

// Function call to initialize app
init();
