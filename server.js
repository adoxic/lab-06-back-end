//load environment variables from .env
require('dotenv').config();

//application dependecies
const express = require('express');
const cors = require('cors');

//application setup
//make express api
const app = express();

//get port on which to run app
const PORT = process.env.PORT;

//enable cors
app.use(cors());

//API routes
app.get('/location', (request, response) => {
    try {
        //use exprdss built-in query object
        const location = request.query.location;
        const result = getLatLng(location);
        response.status(200).json(result);
    }
})