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

const getUserById = (id, callback) => {
    const user = users.find((user) => user.id === id);

    ( user )
        ? callback(null, user)
        : callback(`El usuario con el ${id} no existe`);
}

module.exports = {
    getUserById
}
