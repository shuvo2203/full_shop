const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const database = require('./database/database');

const PORT = process.env.PORT;

app.use(express.json());

const user = require('./router/userRoute');

app.use(user);

app.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`)
});