const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
require('./database/database');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const user = require('./router/userRoute');

app.use('/api/v1', user);

app.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`)
});