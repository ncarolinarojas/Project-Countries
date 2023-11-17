const { Activity } = require('../db');

const postActivity =  async (req, res) => {
    const {
        name,
        difficulty, 
        hours,
        season
    } = req.body
    
}

module.exports = {
    postActivity
}