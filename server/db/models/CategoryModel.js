const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const DressSchema = require('./DressModel');

const CategorySchema = new Schema({
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
    photo: String,
    dresses: [DressSchema]
});

CategorySchema.statics._addDress = function(categoryName, dressContent) {
    return new Promise((resolve, reject) => {
        this.findOne({ slug: categoryName }, function(err, category) {
            if (err) reject(err);
            if (!category) {
                reject({ message: "No category found!" });
            } else {
                category.dresses.push(dressContent);
                category.save()
                    .then((category) => resolve(dressContent))
                    .catch(err => reject(err));
            }
        });
    });
};

CategorySchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

module.exports = mongoose.model("Category", CategorySchema);
