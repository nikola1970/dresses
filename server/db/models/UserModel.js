const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: {
            validator: function(v) {
                return validator.isEmail(v);
            },
            message: '{VALUE} is not a valid phone email!'
        },
        trim: true,
        unique: true
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: [true, 'Username is required!']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true
    }
});

UserSchema.plugin(uniqueValidator, { message: 'Error, expected {PATH} to be unique.' });

UserSchema.methods.comparePasswords = function comparePasswords(password, callback) {
    bcrypt.compare(password, this.password, callback);
};

UserSchema.pre("save", function(next){
    let user = this;
    if (!user.isModified("password")) return next();

    return bcrypt.genSalt(10, function(err, salt){
        if (err) return next(err);
        return bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) return next(err);
            user.password = hash;
            return next();
        });
    });
});



module.exports = mongoose.model("User", UserSchema);