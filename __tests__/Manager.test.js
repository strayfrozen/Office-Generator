// create function for manager


const getRole = require('../lib/manager.js')

test('Overrides employee role and returns manager',() =>{
    expect(getRole('string')).toBe(true);
});