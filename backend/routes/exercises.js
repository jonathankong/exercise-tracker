const router = require('express').Router();
//handling exceptions for async express routes instead 
//of using try catch for each route
const ash = require('express-async-handler');
let Exercise = require('../models/exercise.model');

//Find all exercises and return them as json
router.get('/', ash(async (req, res) => {
    res.json(await Exercise.find());
}));

//Add new exercise
router.post('/add', ash(async (req, res) => {
    const newExercise = await Exercise.create({
        username: req.body.username,
        description: req.body.description,
        duration: req.body.duration,
        date: req.body.date
    });
    res.json('Exercise added!');
}));

module.exports = router;