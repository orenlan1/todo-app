const User = require('../models/user');

const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.postCreateUser = async (req, res) => { 
    try {
        const { name, email, password } = req.body;
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(409).json({ message: 'User already exists!' });
        }
        else {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if (err) {
                    console.log(err);
                }
                else {
                    const user = new User({ name: name, email: email, password: hash });
                    await user.save();
                    res.status(200).json(user);
                }
            });
        }
    } catch (err) {
        console.log(err);
    }
}

exports.postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(400).json({ message: 'User does not exist!' });
        }
        else {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.log(err);
                }
                if (result) {
                    res.status(200).json({ message: 'Login successful', userId: user._id });
                }
                else {
                    res.status(400).json({ message: 'Invalid password!' });
                }
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}
