const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

exports.register=async(req, res)=>{
    const{name,email,password,address} = req.body;

    const existUser = await User.findOne({email:email});
    if(existUser){
        res.status(400).json('user already redistered,please login')
    }
    
    const user = await User.create({
        name,
        email,
        password,
        address
    });
    res.status(200).json(user);
}

exports.login=async(req, res)=>{
    const{email, password} = req.body;

    const user = await User.findOne({email:email}).select("+password");
    if(!user){
        res.status(400).json('user not exist,register first');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        res.status(400).json('password not match');
    }

    const token =await user.generateToken();

    res.status(200).json({message:'login success',token,user});
}