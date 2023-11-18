import { useState } from 'react'
import axios from 'axios';
import validateForm from './ValidateForm'


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

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setActivity({ ...activity, [property]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!validateForm(activity, error, setError)) {
            return;
        }

        // Send the information to the server using Axios
        axios.post('http://127.0.0.1:3001/createActivity', activity)
            .then((response) => {
                if (response.status === 200) {
                    console.log('Activity created successfully');
                    // Clear the form
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
                console.error(error);
            });
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input name="name"
                    value={activity.name}
                    onChange={handleChange}
                ></input>
                <span>{error.name}</span>
            </div>
            <div>
                <label htmlFor="difficulty">Difficulty:</label>
                <input name="difficulty"
                    value={activity.difficulty}
                    onChange={handleChange}
                ></input>
                <span>{error.difficulty}</span>
            </div>
            <div>
                <label htmlFor="hours">Hours:</label>
                <input name="hours"
                    value={activity.hours}
                    onChange={handleChange}
                ></input>
                <span>{error.hours}</span>
            </div>
            <div>
                <label htmlFor="season">Season:</label>
                <input name="season"
                    value={activity.season}
                    onChange={handleChange}
                ></input>
                <span>{error.season}</span>
            </div>
            <div>
                <label htmlFor="countries">Countries:</label>
                <input name="countries"
                    value={activity.countries}
                    onChange={handleChange}
                ></input>
                <span>{error.countries}</span>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CreateActivity