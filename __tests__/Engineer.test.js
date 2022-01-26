// create function for engineer


const getRole = require('../lib/engineer.js')

test('Overrides employee role and returns engineer',() =>{
    expect(getRole('string')).toBe(true);
});