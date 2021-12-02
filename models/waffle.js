const mongoose = require("mongoose");
const waffleSchema = new mongoose.Schema({
    size:{
        type: Number,
        required: [true, 'Size from 1 to 10 required'],
        min: [1, 'Size must be minimum 1'],
        max: [10, 'Size cannot exceed 10']
    },
    color: String,
    cooking_state: String,
    toppings: String
});

module.exports = mongoose.model("Waffle", waffleSchema);