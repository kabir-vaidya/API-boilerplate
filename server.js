const express = require('express');
const app = express();
app.use(express.json())
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000

//Configuring dotenv to point to config file
dotenv.config({path:'./config/config.env'})

//Connect to MongoDB
connectDB();

//CORS
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

//ROUTES
const route = require('./routes/sample');
app.use("/api", route);

//SERVER 
app.listen(PORT,() => console.log(`Server is listening on port ${PORT}`).blue.bold );