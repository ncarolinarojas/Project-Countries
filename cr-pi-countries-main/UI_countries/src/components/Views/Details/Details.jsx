import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/countries/${id}`)
      .then(response => {
        setCountry(response.data);
      })
      .catch(error => {
        console.error('Error al obtener el país:', error);
      });
  }, [id]);

  if (!country) {
    return <p>Return HomePage</p>;
  }

  return (
    <div>
      <Link to={'/home'}>
      <button>Return home</button>
      </Link>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={`Bandera de ${country.name}`} />
      <h3>ID: {country.id}</h3>
      <h3>Continent: {country.continent}</h3>
      <p>Capital: {country.capital}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Area: {country.area}</p>
      <p>Population: {country.population}</p>
    </div>
  );
};

export default Details;
