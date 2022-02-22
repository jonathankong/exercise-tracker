const mongoose = require('mongoose');

const {Schema} = mongoose;

const exerciseSchema = new Schema({
    username: {
        type: String, 
        required: true
    }, 
    description: {
        type: String, 
        required: true
    }, 
    duration: {
        type: Number, 
        required: true,
        validate: {
            validator: v => isNaN(v) == false,
            message: props => `${props.value} is not a proper Number`
        }
    }, 
    date: {
        type: Date, 
        required: true,
        immutable: true,
        validate: {
            validator: v => Date.parse(v) != NaN,
            message: props => `${props.value} is not in a proper Date format`
        }
    }, 
}, {
    timeStamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;