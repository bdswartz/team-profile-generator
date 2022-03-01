const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '', id = '', email = '', officeNumber = '') {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        inquirer.prompt({
            type: 'input',
            name: 'office',
            message: 'Please enter the office number of the Manager (Required).',
        })
    };

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;