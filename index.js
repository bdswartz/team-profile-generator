const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
    console.log(employeeArray);
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the next employee's role? (choose 'None' when done adding employees (Required)",
            choices: ["Engineer", "Intern", "None"],
        }
    ])
    .then(data => {
        switch(data.role) {
            case 'Engineer':
                console.log("role1");
                getEngineerInfo()
                .then(engineerInfo => {
                    const engineer = new Engineer(engineerInfo.name,engineerInfo.id,
                        engineerInfo.email, engineerInfo.github);
                    employeeArray.push(engineer);
                    return addEmployees();
                });
                break;
            case 'Intern':
                console.log("role2");
                getInternInfo()
                .then(internInfo => {
                    const intern = new Intern(internInfo.name,internInfo.id,
                        internInfo.email, internInfo.school);
                    employeeArray.push(intern);
                    return addEmployees();
                });
                break;
            case 'None':
                console.log("You have quit adding employees")
                break;
          };
    })
}

const getEngineerInfo = () => {
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

const getInternInfo = () => {
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
  .then;
//  
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })