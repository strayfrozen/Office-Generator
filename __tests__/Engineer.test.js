// create function for engineer

//Engineer getRole function test

const getRole = require('../lib/engineer.js')

test('Overrides employee role and returns engineer',() =>{
    expect(getRole('Engineer')).toBe('Engineer');
});