// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        message: "Please enter a brief description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide more details about your project and its purpose.",
        name: "about",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What is the link to clone the repo?",
        name: "clone",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license used for this project:",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "None",
        ],
    },
    {
        type: "input",
        name: "test",
        message: "Please enter any testing protocols used for your project.",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "userEmail",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "URL",
        message: "What is the URL of the deployed site?",
    },
    {
        type: "input",
        name: "repo",
        message: "What is the URL of the GitHub Repo?",
    },
];

module.exports = {
    questions: questions,
};