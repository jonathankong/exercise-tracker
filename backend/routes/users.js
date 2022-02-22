const router = require('express').Router();
//handling exceptions for async express routes instead 
//of using try catch for each route
const ash = require('express-async-handler');
let User = require('../models/user.model');

//Get all users
router.get('/', ash(async (req, res) => {
    res.json(await User.find());
}));

//Add a user into MongoDB
router.post('/add', ash(async (req, res) => {
    console.log(`request: ${req.body}`);
    const newUser = await User.create({
        username: req.body.username
    });
    res.send("User added!");
}));

module.exports = router;