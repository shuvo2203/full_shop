const User = require('../models/userModel');
const jwt = require('jsonwebtoken');


exports.authLogin = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.SECRET_KEY);
        req.user = decode;
        next();
    } catch (error) {
        res.status(400).json('Please login to access.')
        console.log(error)
    }
}

exports.admin = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id);
        if (user.role != "admin") {
            res.status(400).json('Unauthorized Access.')
        }else{
            next();
        }
    } catch (error) {
        console.log(error);
    }
}