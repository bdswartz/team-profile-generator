const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

const getEmployeeInfo = () => {
    inquirer.prompt([
        {
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
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address? (Required)',
        },
    ]);
};

const getManagerInfo = (employeeInfo) => {
    inquirer.prompt({
        type: 'input',
        name: 'office',
        message: 'Please enter the office number of the Manager (Required).',
    })
};

const getEngineerInfo = (employeeInfo) => {
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

const getInternInfo = (employeeInfo) => {
    inquirer.prompt({
        type: 'input',
        name: 'school',
        message: "What school is this intern attending? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a school!');
                return false;
            }
        }
    })
}

const addNewEmployee = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'role',
        message: "What is next employee's role? (Chose One)",
        choices: ['Engineer', 'Intern', 'Done Adding Employees']
    })
}