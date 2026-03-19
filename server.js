require('dotenv').config(); //Loading environment variables from .env file

const express = require('express'); //Iporting framework
const path = require('path'); //Importing path module for handling file paths

const app = express (); //creating app instance
const PORT = process.env.PORT; //cofiguring port (env var later)

app.use(express.json()); //Parsin JSON middleware

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next();                 //custom logging,  request method and url
});

app.get('/', (req, res) => {
    res.send("My Week 2 API!"); //Basic route for GET/ "My Weeek 2 API"
});

app.post('/user' , (req, res) => {
    console.log(req.body); //Logging the request body to the console
    const { name, email } = req.body; //Extracting name and email from request body
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required'}); //Validation check for name and email
    }
    res.send(`Hello, ${name}! Your email is ${email}.`); //Response with a greeting message
});

app.get('/user/:id', (req, res) => {
 console.log(req.params); //Logging the route parameters to the console
    const userId = req.params.id; //Extracting user ID from route parameters
                            
     res.send(`User ${userId} profile`); // Responding with a message containing the user ID
});

app.listen(PORT, () => {
    console.log('Server running on https://localhost:${PORT}'); //Starting the server and logging the URL
});

