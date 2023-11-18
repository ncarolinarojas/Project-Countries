const { Activity } = require('../db');

const postActivity = async (name, difficulty, hours, season, countries) => {
    if (name && difficulty && hours && season && countries) {
        // Verifica si una actividad con el mismo nombre ya existe
        let existingActivity = await Activity.findOne({
            where: { name },
        });

        if (existingActivity) {
            return existingActivity;
        }

        const newActivity = await Activity.create({
            name,
            difficulty,
            hours,
            season,
        });

        await newActivity.addCountries(countries);

        return newActivity;
    } else {
        // Manejo de error si falta algún parámetro
        throw new Error('Missing information');
    }
};

module.exports = {
    postActivity,
};