const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
});

userSchema.pre('save', async function(){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }
});

userSchema.methods.generateToken = function(){
    return jwt.sign({_id:this._id}, process.env.SECRET_KEY)
}

module.exports = mongoose.model('user', userSchema);