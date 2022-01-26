// create function for intern

//Intern getRole function test

const getRole = require('../lib/intern.js')

test('Overrides employee role and returns intern',() =>{
    expect(getRole('Intern')).toBe('Intern');
});