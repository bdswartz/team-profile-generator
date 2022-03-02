const inquirer = require("inquirer");
const Manager = require("./lib/Manager");

let employeeArray = [];

const getManagerInfo = () => {
    return inquirer.prompt([
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
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the office number of the Manager (Required).',
        }
    ]);
};

const addEmployees = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the next employee's role? (choose 'None' when done adding employees (Required)",
            choices: ["Engineer", "Intern", "None"],
        }
    ])
    .then(role => {
        switch (role) {
            case 'Engineer':
              getEngineerInfo();
              break;
            case 'Intern':
              getInternInfo();
              break;
            case 'None':

          }
    })
}

const getEngineerInfo = (employeeInfo) => {
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
        {
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
    }])
};

const getInternInfo = (employeeInfo) => {
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
        {
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
        }])
};

getManagerInfo()
  .then(managerInfo => {
      const manager = new Manager(managerInfo.name, managerInfo.id, managerInfo.email, managerInfo.office);
      employeeArray.push(manager);
  })
  .then(addEmployees)
  .then()
//  
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });