const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({
  title,
  description,
  installation,
  usage,
  license,
  contributing,
  tests,
  github,
  email,
}) =>
  `
PROJECT TITLE: ${title}

TABLE OF CONTENT
-[LICENSE](#LICENSE)
-[DESCRIPTION](#DESCRIPTION)
-[INSTALLATION](#INSTALLATION)
-[USAGE](#USAGE)
-[CONTRIBUTION GUIDELINES](#CONTRIBUTION-GUIDELINES)
-[TESTS](#TESTS)
-[CONTACT INFORMATION](#CONTACT-INFORMATION)

# LICENSE
  ${license}

# DESCRIPTION
  ${description}

# INSTALLATION INFORMATION
  ${installation}

# USAGE INFORMATION
  ${usage}

# CONTRIBUTION GUIDELINES
  ${contributing}

# TESTS
  ${tests}

# CONTACT INFORMATION
For further questions reach me on GitHub and by email.
GITHUB: https://github.com/${github}
EMAIL: ${email} `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title of the project:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:'
    },
    {
      type: 'input',
      name: 'license',
      message: 'Choose a type of license (MIT, GNU, BSD):',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter a GitHub username for further questions:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter an email for further questions:',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });



// the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
