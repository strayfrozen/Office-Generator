// create function for intern

//Employee getRole function test

const getRole = require('../lib/employee.js')

test('Overrides employee role and returns employee',() =>{
    expect(getRole('Employee')).toBe('Employee');
});