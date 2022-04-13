function generateMarkdown(data) {

  return `# ${data.title}
## Description
${data.description}

## Table of Contents
[Description](#description)<br>
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>


## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.testing}

## Questions
for any questions please email me at ${data.questions}
Made with love by ${data.username}, Github link: (https://github.com/${data.username})

`;
};

module.exports = generateMarkdown;

