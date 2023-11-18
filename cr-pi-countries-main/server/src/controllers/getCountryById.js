const { Country } = require('../db');

const getCountryById = async (idCountry) => {
    const countryFound = await Country.findByPk(idCountry)
    return countryFound
}

//Falta la lógica para que también traiga las actividades turisticas
//Que estan con ese país

module.exports = {
    getCountryById
}