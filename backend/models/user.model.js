const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    username: {
        type: String, 
        required: true, 
        unique: true, 
        trim: true, 
        minLength: 3
    }, 
}, {
    timeStamps: true,
});

module.exports = mongoose.model('User', userSchema);