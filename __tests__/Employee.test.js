const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
  });
  
  test('id employee parameter', () => {
    const name = "Brian";
    const id = 12
    const email = "fred@fred.com"
    const employee = new Employee(name,id,email);
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id)
    expect(employee.email).toBe(email);
  });


  test('object methods', () => {
    const name = "John Q. Public";
    const id = 3
    const email = "test@test.com"
    const employee = new Employee(name,id,email);
    expect(employee.getName()).toBe(name);
    expect(employee.getId()).toBe(id);
    expect(employee.getEmail()).toBe(email);
    expect(employee.getRole()).toBe("Employee");
  });

