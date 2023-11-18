const { Router } = require("express");
const { getCountries } = require('../controllers/getCountries');
const { getCountryById } = require('../controllers/getCountryById');
const { postActivity } = require('../controllers/postActivity');
const { getActivities } = require('../controllers/getActivities');
const { deleteActivity } = require('../controllers/deleteActivity')

const router = Router();

router.get('/getCountries', async (req, res) => {
    await getCountries()
        .then(country => res.json(country))
        .catch(err => res.status(500).json(err))
})

router.get("/countries/:id", getCountryById);

router.post('/createActivity', async (req, res) => {
    try {
        const { name, difficulty, hours, season, countries } = req.body
        const newActivity = await postActivity(name, difficulty, hours, season, countries)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getActivities', async (req, res) => {
    try {
        const activities = await getActivities()
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete("/activity/:id", deleteActivity);




module.exports = router;