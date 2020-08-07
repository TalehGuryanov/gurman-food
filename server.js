const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const { projects } = require('./angular.json');
const distPath = projects['gurman-food'].architect.build.options.outputPath;

const signUpHandlerPost = require('./BACKEND/api-routes/sign-up/post');
const signInHandlerPost = require('./BACKEND/api-routes/sign-in/post');
const userHandlerGet = require('./BACKEND/api-routes/user/get');
const userFavoritesHandlerGet = require('./BACKEND/api-routes/user/favorites/get');
const userFavoritesHandlerPost = require('./BACKEND/api-routes/user/favorites/post');
const restaurantsHandlerGet = require('./BACKEND/api-routes/restaurants/get');
const restaurantsFilterHandlerPost = require('./BACKEND/api-routes/restaurants/filter/post');
const seedInitial = require('./BACKEND/helpers/seed-initial');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, distPath)));

// Auth routes
app.post('/api/sign-up', signUpHandlerPost);
app.post('/api/sign-in', signInHandlerPost);

// User route
app.get('/api/user', userHandlerGet);
app.get('/api/user/favorites', userFavoritesHandlerGet);
app.post('/api/user/favorites', userFavoritesHandlerPost);

// Events routes
app.get('/api/restaurants', restaurantsHandlerGet);
app.post('/api/restaurants/filter', restaurantsFilterHandlerPost);

// index.html route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, distPath + '/index.html'));
});


seedInitial();


app.listen(PORT, () =>
    console.log('Server is running on port ' + PORT)
);