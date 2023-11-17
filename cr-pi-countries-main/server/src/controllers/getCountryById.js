const { Country } = require('../db');

const getCountry = async (idCountry) => {
    const countryFound = await Country.findOne(idCountry)
    return countryFound
}

//Falta la lógica para que también traiga las actividades turisticas
//Que estan con ese país

module.exports = {
    getCountry
}