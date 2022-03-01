const inquirer = require("inquirer");
const Manager = require("./lib/Manager");


const getManagerInfo = () => {
    let employeeArray = [];
    const manager = new Manager();
    let name = Manager.getName();
    let id = Manager.getId();
    let email = Manager.getEmail();
    let office = Manager.getOffice();
    employeeArray.push(new Manager(name, id, email, office));
    return employeeArray;
};

const addNewEmployee = () => {
    return inquirer.prompt({
        type: 'list',
        name: 'role',
        message: "What is next employee's role? (Chose One)",
        choices: ['Engineer', 'Intern', 'Done Adding Employees']
    })
}


getManagerInfo()
    .then(employeeArray => {
        console.log(employeeArray);
    })