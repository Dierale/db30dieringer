const mongoose = require("mongoose");
const waffleSchema = new mongoose.Schema({
    size:{
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    color: String,
    cooking_state: String,
    toppings: String
});

module.exports = mongoose.model("Waffle", waffleSchema);