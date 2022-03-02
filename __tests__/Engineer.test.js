const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe('object');
  });
  
  test('engineer GitHUb parameter', () => {
    const name = "John Q. Public";
    const id = 12
    const email = "test@test.com"
    const github = "https://github.com/test"
    const engineer = new Engineer(name,id,email,github);
    expect(engineer.github).toBe(github);
  });


  test('object methods', () => {
    const name = "Brian";
    const id = 3
    const email = "test@test.com"
    const github = "https://github.com/test"
    const engineer = new Engineer(name,id,email,github);
    expect(engineer.getRole()).toBe("Engineer");
    expect(engineer.getGithub()).toBe(github);
  });
