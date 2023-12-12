const express = require('express');
const { 
    register, login 
} = require('../controller/userController');
const { authLogin, admin } = require('../middleware/userAuth');
const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.get('/loginVerify',authLogin,(req, res)=>{
    res.json('ok')
});
router.get('/adminVerify', authLogin, admin,(req, res)=>{
    res.json('ok')
})


module.exports = router;