// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
  # ${data.title}

    ${data.description}

    ${data.renderLicenseBadge}

    [A deployed version can be viewed here.](${data.URL})

  ---
  ## Contents
  1. [About](#about)
  
      a. [Visuals](#visuals)
  2. [Installation](#installation)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Authors and acknowledgements](#authors%20and%20acknowledgements)

  ---

  ## About
    ${data.about}

  ---

  ## Visuals:
    ![]()
  
  ---

  ## Installation:
    ${data.installation}

    To clone the repo:

      git clone ${data.clone}
  
  ---

  ## License
    License used for this project: ${data.license}


  ---

  ## Contributing:

  To contribute to this application, create a pull request.
  Here are the steps needed for doing that:
  - Fork the repo
  - Create a feature branch (git checkout -b NAME-HERE)
  - Commit your new feature (git commit -m 'Add some feature')
  - Push your branch (git push)
  - Create a new Pull Request

  ---

  ## Tests: 
    ${data.test}

  ---

  ## Authors and Acknowledgements
    ${data.author}

  ---

  ## Questions
  Please use the following contact information for any questions:

  GitHub Username: ${data.userName}
  
  Email: ${data.userEmail}
`;
}

module.exports = generateMarkdown;