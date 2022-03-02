const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe('object');
  });
  
  test('intern school parameter', () => {
    const name = "John Q. Public";
    const id = 12
    const email = "test@test.com"
    const school = "university of knowledge"
    const intern = new Intern(name,id,email,school);
    expect(intern.school).toBe(school);
  });


  test('object methods', () => {
    const name = "John Q. Public";
    const id = 3
    const email = "test@test.com"
    const school = "university of knowledge"
    const intern= new Intern(name,id,email,school);
    expect(intern.getRole()).toBe("Intern");
    expect(intern.getSchool()).toBe(school);
  });
