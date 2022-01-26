// create function for intern


const getRole = require('../lib/intern.js')

test('Overrides employee role and returns intern',() =>{
    expect(getRole('string')).toBe(true);
});