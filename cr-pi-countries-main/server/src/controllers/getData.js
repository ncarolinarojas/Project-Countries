const axios = require('axios');
const { Country } = require('../db');

const getData =  async () => {
  console.log('Data from API charging in data base');
    try {
        const dataInDB = await Country.count();
    
        if (!dataInDB) {
          const apiResponse = await axios.get("http://localhost:5000/countries")
          const allApiCountries = apiResponse.data.map((api) => {
            return {
                id: api.cca3,
                name: api.name.common,
                flag: api.flags.png,
                continent: api.continents[0],
                capital: api.capital ? api.capital[0] : "Capital not found",
                subregion: api.subregion ? api.subregion : "Antarctica",
                area: api.area,
                population: api.population
            }
          })
          for (const countryData of allApiCountries) {
            try {
                await Country.create(countryData)
            } catch (err) {
            }
          }
        }
    } catch (err) {
        console.error("Error fetching or processing data:", err.message);
        return err
    }
}


module.exports= {
    getData
}