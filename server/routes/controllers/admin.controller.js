const jwt = require("jsonwebtoken");

const Category = require("../../db/models/CategoryModel");
const User = require("../../db/models/UserModel");
import { slugify } from "../../utils";


module.exports.addCategory = (req, res, next) => {
    new Category({
        categoryName: req.body.categoryName,
        slug: slugify(req.body.categoryName),
        photo: req.body.photo
    }).save()
        .then(dress => res.status(201).json({ message: "Successfully created new category!", dress}))
        .catch(err => {
            if (err.errors) { // custom errors
                res.status(400).json({ message: err.errors[Object.keys(err.errors)[0]].message });
            } else { // else something went wrong with saving to the database or with the server
                res.status(500).json({ message: "Something went wrong... Try again soon." });
            }
        });
};

module.exports.editCategory = (req, res, next) => {};

module.exports.deleteCategory = (req, res, next) => {};

module.exports.addDress = (req, res, next) => {
    Category._addDress(req.params.category, { name: slugify(req.body.name) }) // ovde ide full dress objekat (name, desc, slike...)
        .then(newDress => res.status(201).json({ message: "Successfully created new dress!", newDress}))
        .catch(err => {
            if (err.errors) { // custom mongoose dress errors
                res.status(400).json({ message: err.errors[Object.keys(err.errors)[0]].message });
            } else if (err.backendProblem) { // server error
                res.status(500).json(err);
            } else { // no category found
                res.status(404).json(err);
            }
        });
};

module.exports.editDress = (req, res, next) => {};

module.exports.deleteDress = (req, res, next) => {};

module.exports.register = (req, res, next) => {
    new User(req.body).save()
        .then(user => res.status(201).json({ message: `User successfully created!`}))
        .catch(err => {
            if (err.errors) { // custom errors
                res.status(400).json({ message: err.errors[Object.keys(err.errors)[0]].message });
            } else { // else something went wrong with saving to the database or with the server
                res.status(500).json({ message: "Something went wrong... Try again soon." });
            }
        });
};

module.exports.login = (req, res, next) => {
    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            res.status(400).json({ message: "Username not found!" });
        } else {
            user.comparePasswords(req.body.password, function(err, isMatch){
                if (err) {
                    res.status(500).json({ message: "Something went wrong... Try again soon." });
                } else if (!isMatch) {
                    res.status(400).json({ message: "Wrong password..." });
                } else {
                    const token = jwt.sign({ username: user.username, id: user.id }, process.env.JWT_SECRET, { expiresIn: 5 });
                    res.status(202).json({ token, username: user.username, userId: user.id });
                }
            });
        }
    })
    .catch(err => res.status(500).json({ message: "Something went wrong... Try again soon." }));
};


// todo : addDress treba da prima objekat a ne samo jednu vrednost - ovo je vec klijent posao.