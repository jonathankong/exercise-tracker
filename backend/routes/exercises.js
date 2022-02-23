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
    res.send('Exercise added!');
}));

router.get('/:id', ash(async (req, res) => {
    res.json(await Exercise.findById(req.params.id));
}));

router.delete('/:id', ash(async (req, res) => {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    if (exercise !== null) {
        res.send(`Exercise ${exercise.id} has been deleted!`);
    } else {
        res.send(`Couldn't find exercise by id ${req.params.id}`);
    }
}));

router.post('/update/:id', ash(async (req, res) => {
    let exercise = await Exercise.findById(req.params.id);
    if (exercise !== null) {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;
        await exercise.save();
        res.send('Exercise updated!');
    } else {
        res.send(`Couldn't find exercise by id ${req.params.id}`);
    }
}));

module.exports = router;