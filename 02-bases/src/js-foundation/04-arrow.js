const users = [
    {
        id: 1, 
        name: 'Alex Madrid',
    }, 
    {
        id: 2,
        name: 'Juan Perez',
    }, 
    {
        id: 3,
        name: 'Maria Lopez',
    },
    {
        id: 4,
        name: 'Pedro Gonzalez',
    }
];

function getUserById( id, callback) {
    const user = users.find( function(user) {
        return user.id === id;
    });

    if( !user ) {
        return callback(`El usuario con el ${id} no existe`);
    }

    return callback(null, user);
}

module.exports = {
    getUserById
}
