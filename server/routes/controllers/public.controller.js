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
    Category.findOne({ slug: req.params.category })
        .then(category => {
            const dressRecord = category.dresses.find(dress => dress.name = req.params.dress);
            res.status(200).json(dressRecord);
        })
        .catch(err => res.status(500).json(err))
};