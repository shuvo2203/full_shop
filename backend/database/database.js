const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pro").then(()=>{
    console.log('database connected');
}).catch((error)=>{
    console.log('database not connected');
})