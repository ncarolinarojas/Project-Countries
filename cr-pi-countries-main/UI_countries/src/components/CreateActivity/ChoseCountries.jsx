import axios from 'axios';

const choseCountries = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3001/getCountries');
    if (response.status === 200) {
      const countries = response.data;
      const countryOptions = countries.map((country) => ({
        id: country.id,
        name: country.name,
      }));

      return countryOptions;
    } else {
      throw new Error('Error getting countries');
    }
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

export default choseCountries;
