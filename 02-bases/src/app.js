

// require('./js-foundation/02-destructuring.js');
// require('./js-foundation/03-callbacks.js');
// const { emailTemplate } = require('./js-foundation/01-template.js');

const id = 5;
const { getUserById } = require('./js-foundation/03-callbacks.js');

getUserById( id, function(error, user) {
    if( error ) {
        throw new Error(error);
    }

    console.log(user);
});
//console.log(emailTemplate);
