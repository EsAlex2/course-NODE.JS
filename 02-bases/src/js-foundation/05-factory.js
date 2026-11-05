
const {v4: uuidv4} = require('uuid');
const getAge = require('get-age');

const persona = { 
    name: 'Alex', 
    birthYear: '1999-01-28',
}

const buildPerson = ( { name, birthYear } ) => {
    return {
        id: uuidv4(),
        name: name,
        birthYear: birthYear,
        age: getAge(birthYear),
    }
}

const data = buildPerson(persona);
console.table(data);