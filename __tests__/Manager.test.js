const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
  });
  
  test('Manager officeNumber parameter', () => {
    const name = "John Q. Public";
    const id = 12
    const email = "test@test.com"
    const officeNumber = 10
    const manager = new Manager(name,id,email,officeNumber);
    expect(manager.officeNumber).toBe(officeNumber);
  });


  test('Manager object methods', () => {
    const name = "John Q. Public";
    const id = 3;
    const email = "test@test.com";
    const officeNumber = 10;
    const manager = new Manager(name,id,email,officeNumber);
    expect(manager.getRole()).toBe("Manager");
    expect(manager.getOfficeNumber()).toBe(officeNumber);
  });
