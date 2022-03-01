const inquirer = require("inquirer");

class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        inquirer.prompt({
            type: 'input',
            name: 'name',
            message: "What is the employee's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        })
    };

    getId() {
        inquirer.prompt({
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
        })
    };

    getEmail() {
        inquirer.prompt({
            type: 'input',
            name: 'email',
            message: 'Please enter the email address? (Required)',
        })
    };

    getRole() {
        return "Employee";
    }
};

module.exports = Employee;