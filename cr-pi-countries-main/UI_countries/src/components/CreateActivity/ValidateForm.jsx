import axios from "axios";

const validateForm = (formData, errorState, setErrorState) => {
    let isValid = true;

    // Validación del campo 'name'
    if (!formData.name.trim()) {
        setErrorState((prevError) => ({ ...prevError, name: "Name is required" }));
        isValid = false;
    } else {
        setErrorState((prevError) => ({ ...prevError, name: "" }));
    }

    // Validación del campo 'difficulty'
    const difficultyNumber = parseFloat(formData.difficulty);
    if (isNaN(difficultyNumber) || difficultyNumber < 1 || difficultyNumber > 5) {
        setErrorState((prevError) => ({ ...prevError, difficulty: "Difficulty must be a number between 1 and 5" }));
        isValid = false;
    } else {
        setErrorState((prevError) => ({ ...prevError, difficulty: "" }));
    }

    // Validación del campo 'hours'
    const hoursNumber = parseFloat(formData.hours);
    if (isNaN(hoursNumber) || hoursNumber % 1 !== 0) {
        setErrorState((prevError) => ({ ...prevError, hours: "Hours must be a whole number" }));
        isValid = false;
    } else {
        setErrorState((prevError) => ({ ...prevError, hours: "" }));
    }

    // Validación del campo 'season'
    if (!["Summer", "Spring", "Autumn", "Winter"].includes(formData.season)) {
        setErrorState((prevError) => ({ ...prevError, season: "Invalid season" }));
        isValid = false;
    } else {
        setErrorState((prevError) => ({ ...prevError, season: "" }));
    }

    // Validación del campo 'countries'
    // Se asume que getCountries devuelve una lista de IDs de países válidos
    // Puedes adaptar esto según la respuesta real de tu API
    axios.get('http://127.0.0.1:3001/getCountries')
        .then(response => {
            const validCountryIds = response.data.map(country => country.id);
            const invalidCountries = formData.countries.filter(country => !validCountryIds.includes(country));
            if (invalidCountries.length > 0) {
                setErrorState((prevError) => ({ ...prevError, countries: "Invalid countries" }));
                isValid = false;
            } else {
                setErrorState((prevError) => ({ ...prevError, countries: "" }));
            }
        })
        .catch(error => {
            console.error("Error fetching countries:", error);
            setErrorState((prevError) => ({ ...prevError, countries: "Error fetching countries" }));
            isValid = false;
        });

    return isValid;
};

export default validateForm