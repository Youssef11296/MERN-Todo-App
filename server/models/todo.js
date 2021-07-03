const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 6,
    },
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);