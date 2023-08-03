// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");


const generateMarkdown = require("./utils/generateMarkdown");

// variable to hold the file with the license information
const renderLicenseBadge = require("./utils/license").renderLicenseBadge;

// TODO: Create an array of questions for user input
const questions = require("./utils/questions").questions;


const writeToFile = util.promisify(fs.writeFile);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        answers.renderLicenseBadge = renderLicenseBadge(answers.license);
        // function to write readme file
        let readMeData = generateMarkdown(answers);
        await writeToFile("new-README.md", readMeData);
    } catch (err) {
        console.log(err);
    }
}


// Function call to initialize app
init();