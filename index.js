const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/page-template");
const fs = require('fs');
let employeeArray = [];

validateEmail = input => {
    var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    returnBool = validEmail.test(input);
    return returnBool;
  };
  
const createFile = (content) => {
      return new Promise((resolve, reject) => {
          fs.writeFile('./dist/index.html', content, err => {
              // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
              if (err) {
              reject(err);
              // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
              return;
              }
  
              // if everything went well, resolve the Promise and send the successful data to the `.then()` method
              resolve({
              ok: true,
              message: 'File created!'
              });
          });
      })
  };
  
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
                    console.log("Please enter the manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address? (Required)',
            validate: emailInput => {
                if (validateEmail(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter the office number of the Manager (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid office number!');
                    return false;
                }
            }
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
    .then(data => {
        switch(data.role) {
            case 'Engineer':
                getEngineerInfo()
                .then(engineerInfo => {
                    const engineer = new Engineer(engineerInfo.name,engineerInfo.id,
                        engineerInfo.email, engineerInfo.github);
                    employeeArray.push(engineer);
                    return addEmployees();
                });
                break;
            case 'Intern':
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
                const content = generatePage(employeeArray);
                createFile(content);
                break;
          };
    })
};

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
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address? (Required)',
            validate: emailInput => {
                if (validateEmail(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
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
                    console.log("Please enter the employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee ID? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid employee number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address? (Required)',
            validate: emailInput => {
                if (validateEmail(emailInput)) {
                    return true;
                } else {
                    console.log('Please enter a valid email address!');
                    return false;
                }
            }
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
  .then(addEmployees);