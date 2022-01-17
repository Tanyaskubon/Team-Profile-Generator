const Manager=require ('../lib/Manager')

test(" match employee",() => {
    const manager = new Manager ('name',12,'email',1234567);
  
    // test for success match
    expect(manager.getName()).toMatch('name');
    
    expect(manager.getEmail()).toMatch('email');
    
})

