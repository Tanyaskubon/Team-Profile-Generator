const Manager=require ('../lib/Manager')

test('creates  Manager object', () => {
    const manager = new Manager('Tanya', 12, 'tanyaskubon25@gmail.com', 2);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Tanya', 12, 'tanyaskubon25@gmail.com', 2);


    expect(manager.getRole()).toEqual("Manager");
}); 
