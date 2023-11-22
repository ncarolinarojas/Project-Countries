import { useState, useEffect } from 'react'
import axios from 'axios';
import validateForm from './ValidateForm'
import choseCountries from './ChoseCountries';
import '../../styles/createActivity.scss'


const CreateActivity = () => {

    const [activity, setActivity] = useState({
        name: "",
        difficulty: 0,
        hours: 0,
        season: "",
        countries: []
    })

    const [error, setError] = useState({
        name: "",
        difficulty: 0,
        hours: 0,
        season: "",
        countries: []
    })

    const [countryOptions, setCountryOptions] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const options = await choseCountries();
            setCountryOptions(options);
        };

        fetchCountries();
    }, []);

    const handleChange = (event) => {
        const property = event.target.name;
        let value = event.target.value;

        if (property === 'countries') {
            const countryId = event.target.value;
            let updatedCountries = [...activity.countries];

            if (event.target.checked) {
                updatedCountries.push(countryId);
            } else {
                updatedCountries = updatedCountries.filter((id) => id !== countryId);
            }

            value = updatedCountries;
        }

        setActivity({ ...activity, [property]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateForm(activity, error, setError)) {
            return;
        }

        axios.post('http://127.0.0.1:3001/createActivity', activity)
            .then((response) => {
                if (response.status === 200) {
                    alert('Activity created!!')
                    setActivity({
                        name: "",
                        difficulty: 0,
                        hours: 0,
                        season: "",
                        countries: [],
                    });
                } else {
                    console.error('Error creating activity');
                }
            })
            .catch((error) => {
                alert(error)
            });

        console.log('Activity data:', activity);
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <p>Write the activity name</p>
                <label htmlFor="name">Name:</label>
                <input name="name"
                    value={activity.name}
                    onChange={handleChange}
                ></input>
                <span>{error.name}</span>
            </div>
            <div>
                <p>Chose the difficulty the activity</p>
                <label htmlFor="difficulty">Difficulty:</label>
                <select
                    name="difficulty"
                    onChange={handleChange}>
                    <option value={activity.difficulty = 1}>{1}</option>
                    <option value={activity.difficulty = 2}>{2}</option>
                    <option value={activity.difficulty = 3}>{3}</option>
                    <option value={activity.difficulty = 4}>{4}</option>
                    <option value={activity.difficulty = 5}>{5}</option>
                </select>
                <span>{error.difficulty}</span>
            </div>
            <div>
                <p>Write hours (is a number) </p>
                <label htmlFor="hours">Hours:</label>
                <input name="hours"
                    value={activity.hours}
                    onChange={handleChange}
                ></input>
                <span>{error.hours}</span>
            </div>
            <div>
                <p>Chose the season</p>
                <label htmlFor="season">Season:</label>
                <select
                    name="season"
                    onChange={handleChange}>
                    <option value={activity.season = "Summer"}>Summer</option>
                    <option value={activity.season = "Autumn"}>Autumn</option>
                    <option value={activity.season = "Winter"}>Winter</option>
                    <option value={activity.season = "Spring"}>Spring</option>
                </select>
                <span>{error.season}</span>
            </div>
            <div className='countries'>
                <p>Choose the countries where you can do this activity</p>
                <label>Countries:</label>
                <select id="countries" onChange={handleChange}>
                    {countryOptions.map((country) => (
                        <option key={country.id} value={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <span>{error.countries}</span>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateActivity