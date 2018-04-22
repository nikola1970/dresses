const Category = require("../../db/models/CategoryModel");
const Dress = require("../../db/models/DressModel");

module.exports.getCategories = (req, res, next) => {
    Category.find({})
        .then(categories => res.status(200).json(categories))
        .catch(err => res.status(500).json(err));
};

module.exports.getCategory = (req, res, next) => {
    Category.findOne({ slug: req.params.category })
        .then(category => res.status(200).json(category))
        .catch(err => res.status(500).json(err))
};

module.exports.getDress = (req, res, next) => {
    Category._getDress(req.params.dress)
        .then(dress => {
            if (!dress.length) {
                res.status(200).json({ message: "No dress found..." });
            } else {
                res.status(200).json(dress);
            }
        })
        .catch(err => res.status(500).json(err));
};