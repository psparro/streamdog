/// Website link: https://streamdog.herokuapp.com/

const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const session = require('express-session');
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
const userController = require("./controllers/userController.js")

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defining static folder
app.use(express.static('public'));
//this tells express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: true }))

app.use(fileupload());

app.use(session({
    secret: `${process.env.SECRET_KEY}`,
    resave: false,
    saveUninitialized: true
}))

app.use((req,res,next)=>{
    res.locals.user = req.session.userInfo;
    next();
})

app.use("/movies/",moviesController);
app.use("/", generalController);
app.use("/user/", userController);




// --------------------------------WEB SERVER---------------------------------
const HTTP_PORT = process.env.PORT;
dbForMovies.initializeDB();
dbForUser.initializeDB();
app.listen(HTTP_PORT, () => {
    console.log(`Web server is up and running on port ${HTTP_PORT}`);
});    

