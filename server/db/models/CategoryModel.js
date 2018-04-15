const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Category name is required!'],
        trim: true,
        unique: true
    },
    slug: {
        type: String,
        trim: true
    },
    photo: String
});

CategorySchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

module.exports = mongoose.model("Category", CategorySchema);