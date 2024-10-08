const express = require('express');
const cors = require('cors');
const pool = require('./db/db.js');
const signUpRoute = require('./routes/Signup.routes.js');
const userListRoute = require('./routes/users.routes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors({
    origin: 'https://assingment-jade.vercel.app',
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/signup', signUpRoute)
app.use('/userlist', userListRoute)

app.listen(port, (req, res) => {
    console.log(`Server running on port : ${port}`);
})
