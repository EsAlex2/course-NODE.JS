// require('./js-foundation/02-destructuring.js');
// require('./js-foundation/03-callbacks.js');
// const { emailTemplate } = require('./js-foundation/01-template.js');
const { getuuid, getAge } = require('./plugins/index.js');
const { buildMakePerson } = require('./js-foundation/05-factory.js');

const makePerson = buildMakePerson({ getuuid, getAge });

const objeto = { name: 'Alex', birthYear: '1999-01-28' }

const data = makePerson( objeto );
console.table(data);

