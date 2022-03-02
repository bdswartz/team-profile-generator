const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
  });

  test('name employee parameter', () => {
    const name = "Brian";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });

  test('id employee parameter', () => {
    const name = "Brian";
    const id = 12
    const email = "fred@fred.com"
    const employee = new Employee(name,id,email);
    expect(employee.email).toBe(email);
  });

