const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('database connected');
}).catch((error)=>{
    console.log('database not connected');
})