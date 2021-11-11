const mongoose = require("mongoose");
const waffleSchema = new mongoose.Schema({
    size: Number,
    color: String,
    cooking_state: String,
    toppings: Array
});

module.exports = mongoose.model("Waffle", waffleSchema);