const SearchBar = (countries, searchTerm) => {
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.continent.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredCountries
}

export default SearchBar