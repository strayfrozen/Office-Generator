// create function for manager

//Manager getRole function test

const getRole = require('../lib/manager.js')

test('Overrides employee role and returns manager',() =>{
    expect(getRole('Manager')).toBe('Manager');
});