const Intern = require('../lib/Intern');
 
test('creates Intern object', () => {
    const intern = new Intern('Tanya', 12, 'tanyaskubon25@gmail.com','OSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Tanya', 12, 'tanyaskubon25@gmail.com','OSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets  employee role', () => {
    const intern = new Intern('Tanya', 12, 'tanyaskubon25@gmail.com','OSU');

    expect(intern.getRole()).toEqual("Intern");
});