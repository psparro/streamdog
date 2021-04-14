/// Website link: https://streamdog.herokuapp.com/

const express = require("express");
const exphbs  = require('express-handlebars');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const clientSessions = require("client-sessions");
const fileupload = require('express-fileupload');

//load environment variable file
require('dotenv').config({path:"./config/keys.env"});

const app = express();
var hbs = exphbs.create({ /* config */ });

// Importing modules
const dbForUser = require("./models/dbForUser");
const dbForMovies = require("./models/dbForMovies");
const movieModel = require("./models/movieDB");
const userModel = require("./models/userDB");

//Importing controllers
const moviesController = require("./controllers/moviesController.js");
const generalController = require("./controllers/general.js");
const signupController = require("./controllers/userController.js")

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defining static folder
app.use(express.static('public'));

app.use(fileupload());

app.use("/",moviesController);
app.use("/", generalController);
app.use("/", signupController);

//this tells express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: true }))


// --------------------------------WEB SERVER---------------------------------
const HTTP_PORT = process.env.PORT;
dbForMovies.initializeDB();
dbForUser.initializeDB();
app.listen(HTTP_PORT, () => {
    console.log(`Web server is up and running on port ${HTTP_PORT}`);
});    

