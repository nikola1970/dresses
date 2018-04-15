const jwt = require("jsonwebtoken");

const Category = require("../../db/models/CategoryModel");
const Dress = require("../../db/models/DressModel");
const User = require("../../db/models/UserModel");
import { slugify } from "../../utils";


module.exports.addCategory = (req, res, next) => {
    new Category({
        categoryName: req.body.categoryName,
        slug: slugify(req.body.categoryName),
        photo: req.body.photo
    }).save(function(err, dress) {
        if (err) {
            if (err.errors) { // custom errors
                res.status(400).json({ message: err.errors[Object.keys(err.errors)[0]].message });
            } else { // else something went wrong with saving to the database or with the server
                res.status(500).json({ message: "Something went wrong... Try again soon." });
            }
        } else {
            res.status(201).json({ message: "Successfully created new category!", dress});
        }
    });
};

module.exports.editCategory = (req, res, next) => {};

module.exports.deleteCategory = (req, res, next) => {};

module.exports.addDress = (req, res, next) => {};

module.exports.editDress = (req, res, next) => {};

module.exports.deleteDress = (req, res, next) => {};

module.exports.register = (req, res, next) => {
    new User(req.body).save((err, user) => {
        if (err) {
            if (err.errors) { // custom errors
                res.status(400).json({ message: err.errors[Object.keys(err.errors)[0]].message });
            } else { // else something went wrong with saving to the database or with the server
                res.status(500).json({ message: "Something went wrong... Try again soon." });
            }
        } else {
            res.status(201).json({ message: `User successfully created!`});
        }
    });
};

module.exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username }).exec((err, user) => {
        if (err) {
            res.status(500).json({ message: "Something went wrong... Try again soon." });
        } else if (!user) {
            res.status(400).json({ message: "Username not found!" });
        } else {
            user.comparePasswords(req.body.password, function(err, isMatch){
                if (err) {
                    res.status(500).json({ message: "Something went wrong... Try again soon." });
                } else if (!isMatch) {
                    res.status(400).json({ message: "Wrong password..." });
                } else {
                    const token = jwt.sign({ username: user.username, id: user.id }, process.env.JWT_SECRET, { expiresIn: 5 });
                    res.status(202).json({ token, username: user.username });
                }
            });
        }
    });
};

// todo: prevent duplication of the custom error handlers in controllers