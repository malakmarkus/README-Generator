// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project\'s title? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project\'s name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a description of your project.(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'please list the installation instructions for your project.(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please list the installation instructions for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'provide instructions on how to use your project.(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the usage instructions');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'select the type of your license',
            choices: ['Apache', 'BSD3', 'MIT', 'None']
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If applicable, add guidelines on how other developers can contribute to your project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'If applicable, provide any tests written for your project.'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'add your email to receive questions about your app.(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'enter your Github username.(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('a Github username is required');
                    return false;
                }
            }
        },
    ])
};




// TODO: Create a function to write README file

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) throw err;
        console.log('README complete! check out readme.md to see the output!');
    });
}
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
promptUser()
.then(answers => {return generateMarkdown(answers);
})
.then (data => {
    return writeFile(data);
})
.catch(err => {console.log(err)
});


