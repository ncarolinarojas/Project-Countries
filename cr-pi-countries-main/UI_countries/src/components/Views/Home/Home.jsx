import { Link } from "react-router-dom";
import Cards from "../../Cards/Cards";
import SearchBar from "../../SearchBar/SearchBar";
import { useState } from "react";
import '../../../styles/HomePage.css'

const Home = () => {

    const countries = Cards()
    const [searchTerm, setSearchTerm] = useState('');
    const filteredCountries = SearchBar(countries, searchTerm)
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 10;

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    // Cambiar de página
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <input type="text"
                placeholder="Search your favorite!"
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value) }}
            >
            </input>
            <h2>Countries List</h2>

            <div className="cards">
                {currentCountries.map(country => (
                    <div key={country.id} className="card">
                        <Link to={`/country/${country.id}`}>
                            <img src={country.flag} alt={`Bandera de ${country.name}`} />
                            <h3>{country.name}</h3>
                            <p>Continent: {country.continent}</p>
                        </Link>
                    </div>
                ))}
            </div>

            <div>
                {Array.from({ length: Math.ceil(filteredCountries.length / countriesPerPage) }).map((_, index) => (
                    <button key={index + 1} onClick={() => paginate(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>

        </div>
    )
}

export default Home;