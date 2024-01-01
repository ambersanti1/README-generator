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
      type: 'list',
      name: 'license',
      message: 'Choose a type of license (MIT, GNU, BSD):',
      choices: ['MIT', 'GNU', 'BSD'],
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
    if (answers.license === "MIT") {
      answers.license = 'MIT License (2023, Ryan Messett). Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.';

    } else if (answers.license === "GNU") {
      answers.license = 'GNU GENERAL PUBLIC LICENSE (2007, Free Software Foundation). The GNU General Public License is a free, copyleft license for software and other kinds of works. The licenses for most software and other practical works are designed to take away your freedom to share and change the works.  By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users.  We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also toany other work released this way by its authors.  You can apply it to your programs, too.';

    } else if (answers.license === "BSD") {
      answers.license = 'BSD 2-Clause License (2024, ambersanti1). Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.';
    }
    const readmePageContent = generateREADME(answers);
    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });



// the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
