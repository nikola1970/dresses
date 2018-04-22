const mongoose = require("mongoose");

const DressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Dress name is required"],
        trim: true,
    },
    description: String,
    category: String,
    slug: String,
    images: [String],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = DressSchema;