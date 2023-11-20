import { NavLink } from "react-router-dom";
import Cards from "../../Cards/Cards";
import SearchBar from "../../SearchBar/SearchBar";
import { useState } from "react";
import '../../../styles/HomePage.scss'

const Home = () => {
    const countries = Cards()
    const [searchTerm, setSearchTerm] = useState('');
    const filteredCountries = SearchBar(countries, searchTerm)
    const [currentPage, setCurrentPage] = useState(1);
    const countriesPerPage = 10;

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountries = filteredCountries.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <div className="information">
                <h2>Countries List</h2>
                <p className="information__general">Welcome! You can watch countries in this app and create activities to organize your future trips! Come on! Create your first activity here</p>
                <button className="information__button">
                    <NavLink to={'/createActivity'}>Create your first activity!</NavLink>
                </button>
            </div>
            <div className="searchbar">
                <input
                    className="searchbar__input"
                    type="text"
                    placeholder="Search your favorite country!"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                >
                </input>
            </div>
            <div className="cards">
                {currentCountries.map(country => (
                    <div key={country.id} className="cards__card">
                        <NavLink to={`/country/${country.id}`}>
                            <img src={country.flag} alt={`Bandera de ${country.name}`} />
                            <h3>{country.name}</h3>
                            <p>Continent: {country.continent}</p>
                        </NavLink>
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