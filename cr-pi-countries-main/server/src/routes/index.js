const { Router } = require("express");
const { getCountries } = require('../controllers/getCountries');
const { getCountryById } = require('../controllers/getCountryById');
const { postActivity } = require('../controllers/postActivity');
const {getActivities} = require('../controllers/getActivities');

const router = Router();

router.get('/getCountries', async (req, res) => {
    await getCountries()
        .then(country => res.json(country))
        .catch(err => res.status(500).json(err))
})

router.get('/getCountry/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const country = await getCountryById(id);
        res.status(201).json(country)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.post('/createActivity', async (req, res) => {
    try {
        const { name, difficulty, hours, season } = req.body
        const newActivity = await postActivity(name, difficulty, hours, season)
        res.status(200).json(newActivity)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.get('/getActivities', async (req, res) => {
    try{
        const activities = await getActivities()
        res.status(200).json(activities)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




module.exports = router;

//router.get("/countries/:id", getCountryById); OK

//router.get("/countries", getCountry); OK

//router.post("/activity", postActivity); ok

//router.get("/activity", getActivities); ok

//router.delete("/activity", deleteActivity);