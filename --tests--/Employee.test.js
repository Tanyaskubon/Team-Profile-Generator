const Employee = require ('../lib/Employee')

test(" match employee",() => {
    const employee = new Employee ('name',12,'email');
  
    // test for success match
    expect(employee.getName()).toMatch('name');
  
    
  })