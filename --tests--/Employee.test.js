const Employee = require ('../lib/Employee')

test(" can create Enmployee",() => {
    const em = new Employee ('Tanya', 12, 'tanyaskubon25@gmail.com');
  
    expect(typeof(em)).toBe('object');
   
  });

  test(" gets employee name", () => {
   const em = new Employee('Tanya', 12, 'tanyaskubon25@gmail.com');
   
   expect(em.getName()).toEqual(expect.any(String));
  });

  test("gets employee id", () =>  {
    const em = new Employee('Tanya', 12, 'tanyaskubon25@gmail.com');
   
    expect(em.getId()).toEqual(expect.any(Number));
  });

test('gets employee email', () => {
  const em = new Employee('Tanya', 12, 'tanyaskubon25@gmail.com');

  expect(em.getEmail()).toEqual(expect.stringContaining(em.email.toString()));
});


test('gets role of employee', () => {
  const em = new Employee('Tanya', 12, 'tanyaskubon25@gmail.com');

  expect(em.getRole()).toEqual("Employee");
}); 