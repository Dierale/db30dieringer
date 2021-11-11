const mongoose = require("mongoose");
const waffleSchema = new mongoose.Schema({
    size: Number,
    color: String,
    cooking_state: String,
    topping: Array
});

module.exports = mongoose.model("Waffle", waffleSchema);