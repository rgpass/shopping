// HTTP framework for Node
// Fun fact: Node is NOT a language, it's the ability to run JavaScript (which is a language)
// on the back-end
const express = require('express');

// Some Express tool to log things better
// default logging in Express is terrible
const logger = require('morgan');

// Express for whatever reason decided to not parse req.body in POST reqs
// makes no sense to me but I don't make the decisions at Express
const bodyParser = require('body-parser');

// Literally just creating a server object that we will 'run'/'start' soon
// after we set up our stuff aka set up middleware, register routes, set up engine
const app = express();

// dotenv allows access to a .env file
// and assigns to the variable process.env.SOME_PROPERTY_DEFINED_IN_.env
require('dotenv').config();

// Mongoose is our ORM -- Object Relational Mapper
// this allows us to make DB calls easily using a JavaScript syntax
// Future self: Similar to ActiveRecord in Rails
// Essentially we don't need extensive knowledge on Mongo queries -- Mongoose
// gives us commands to run for common calls, such as `.find({})` (maybe?)
const mongoose = require('mongoose');

// Now we have to connect to our DB
// but our local DB is going to be diff than our production DB
// How do distinguish between these? Environment variables!
mongoose.connect(process.env.MONGODB_URI);


// Set up our engine
app.use(logger('dev')); // why logger('dev') specifically? idk -- prob the amount of info that comes
app.use(bodyParser.json()); // Registering bodyParser when use JSON
app.use(bodyParser.urlencoded({ extended: true })); // idk

// Which folder to use for public assets -- html, css, js
app.use(express.static('public'));

// Register routes
// (1) Pull in the controller routes
const itemsController = require('./controllers/items');
// (2) Register a prefix to those routes
app.use('/api/items', itemsController);


// Heroku uses its own port so we can't just say use 3000
const port = process.env.PORT || 3030;
console.log(`Now listening on port: ${port}`);
app.listen(port);

