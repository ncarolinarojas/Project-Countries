import { useState, useEffect } from 'react';
import axios from 'axios';

const Cards = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:3001/getCountries')
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los países:', error);
      });
  }, []); 

  return countries
};

export default Cards;