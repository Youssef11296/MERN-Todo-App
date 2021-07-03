const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
    },
}, { timestamps: true });

module.exports = mongoose.model("Todo", todoSchema);