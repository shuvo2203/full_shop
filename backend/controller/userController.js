const User = require('../models/userModel');



exports.register=async(req, res)=>{
    const{name,email,password} = req.body;
    const user = await User.create({
        name,email,password
    });
    res.status(200).json({
        message:'registration successfull',
        user
    });
}