const { Activity } = require('../db');

const postActivity =  async (name, difficulty, hours, season) => {
    const newActivity = await Activity.create({
        name,
        difficulty,
        hours,
        season
    })

    return newActivity
}

module.exports = {
    postActivity
}