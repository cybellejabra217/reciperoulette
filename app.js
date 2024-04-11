const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require("dotenv").config();

// importing the routes (handlers)
const userRoutes = require('./Routes/users.routes');
const recipeRoutes = require('./Routes/recipes.routes');
const cuisineRoutes = require('./Routes/cuisines.routes');
const loginRoutes = require('./Routes/login.routes'); 
const ratingRoutes = require('./Routes/ratings.routes');
const reviewRoutes = require('./Routes/reviews.routes');
const spinTheWheelRoutes = require('./Routes/spinTheWheel.routes');

// middleware to parse json bodies
app.use(bodyParser.json());

// register and use route handlers
app.use(userRoutes);
app.use(recipeRoutes);
app.use(cuisineRoutes);
app.use(loginRoutes); 
app.use(ratingRoutes);
app.use(reviewRoutes);
app.use(spinTheWheelRoutes);

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// setting up the server to run on port 3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});