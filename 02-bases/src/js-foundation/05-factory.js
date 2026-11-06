const buildMakePerson = ({ getuuid, getAge }) => {
  return ({ name, birthYear }) => {
    return {
      id: getuuid(),
      name: name,
      birthYear: birthYear,
      age: getAge(birthYear),
    };
  };
};

module.exports = {
  buildMakePerson,
};
