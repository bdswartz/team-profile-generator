const Employee = require('./Employee');
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        inquirer.prompt({
            type: 'input',
            name: 'github',
            message: "What is this engineer's GitHub username? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a GitHub username');
                    return false;
                }
            }
        })
    };

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;