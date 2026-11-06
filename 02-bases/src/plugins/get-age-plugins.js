const getAgePlugin = require('get-age');

const getAge = (birthYear) => {

    if (!birthYear) return new Error('El cumpleaños es requerido');

    return getAgePlugin(birthYear);
}

module.exports = {
    getAge,
}