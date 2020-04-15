function generateMarkdown(data) {
  return `

# ${data.title}  
${data.license} 

## Description: 
${data.description}

## Table of Contents

* [Installation] (#installation)

* [Usage] (#usage)

* [License] (#license)

* [Contributing] (#contributing)
  
* [Tests] (#tests)

* [Questions] (#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## License https://choosealicense.com/

badges  shields.io

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

<img src="${data.image}" alt="avatar" style="border-radius: 16px" width="30" />

If you have any questions about the repo, open an issue or contact [${data.username}] (https://api.github.com/users/${data.username}) directly at ${data.email}

`;
}

module.exports = generateMarkdown;
