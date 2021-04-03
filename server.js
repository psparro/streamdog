/// Website link: https://streamdog.herokuapp.com/

const express = require("express");
const exphbs  = require('express-handlebars');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');
const clientSessions = require("client-sessions");

//load environment variable file
require('dotenv').config({path:"./config/keys.env"});

const app = express();
var hbs = exphbs.create({ /* config */ });

// Importing modules
const fakeDB = require("./models/FakeDB");
const dbForUser = require("./models/dbForUser");
const dbForMovies = require("./models/dbForMovies");
const movieModel = require("./models/movieDB");
const userModel = require("./models/userDB");

//Importing controllers
const moviesController = require("./controllers/movies");

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defining static folder
app.use(express.static('public'));

// app.use("/new/",moviesController);

//this tells express to make form data available via req.body in every request
app.use(bodyParser.urlencoded({ extended: true }))

// -----------------------------------ROUTS-----------------------------------
app.get("/", (req, res) => {
    res.render("home",{
        title: "Home",
        featuredMovies: fakeDB.getFeaturedMovie(),
        featuredTV: fakeDB.getFeaturedTV(),
    });
});

// ---------------------------------SIGN UP-----------------------------------

app.get("/signup", (req,res)=>{
    res.render("signup",{
        title: "Sign Up",
    })
});

app.post("/signup", (req,res) => {
    const r_error = [];
    const exp =/^[a-zA-Z0-9._-]+@[a-z.-]+\.[a-z]{2-5}$/;

    if(req.body.f_name == "")
    {
        r_error.push({fname: `This field must be filed.`})
    }

    if(req.body.l_name == "")
    {
        r_error.push({lname: `This field must be filled.`})
    }

    if(req.body.email == "")
    {
        r_error.push({emaile: `This field must be filled.`})
    }

    if(req.body.email.match(exp)){
        r_error.push({emaile:"Enter a valid Email address."})
    } 

    if(req.body.password=="") {
        r_error.push({epassword:"Password can't be blank."})
    } 
    
    else if(req.body.password.length < 6 || req.body.password.length > 12) {
        r_error.push({epassword:"Password Must be 6 to 12 char long"})
    }

    if(r_error.length > 0) {
        res.render("signup",{
            title: "sign up",
            errorMessages: r_error
        })
    }

    else{

        const {f_name, l_name, email} = req.body;


        sgMail.setApiKey(process.env.API);
        
        const html = `<bold><h2>Hello ${f_name} ${l_name}</h2></bold>
        <h2>You are signed up.          
        <br><br>
        Regards<br>
        Parth Patel<br>
        CEO STREAMDOG
        </h2>
        `;

        const msg = {
          to: `${email}`,
          from: {
              name: 'STREAMDOG',
              email: 'parthjpatel00@gmail.com'
          },
           subject: 'Welcome to STREAMDOG!',
          html: html,
        };
        sgMail.send(msg)
        .then(() => {
            //this variable holds the value submitted from the user in the form
            const newUser = {
                firstName : req.body.f_name,
                lastName : req.body.l_name,
                email : req.body.email,
                password : req.body.password
            }

            //create a new document and INSERT into a mongoDB collection
            const user = new userModel(newUser);
            user.save()
            .then(user=>{
                console.log(user);
            })
        })
        .then(() => {
            res.redirect("dashboard");
        })
        .catch(err => {
            console.log(`Error while post: ${err}`);
        });
    } 
});

// ------------------------------------LOG IN---------------------------------

app.get("/login", (req,res)=>{
    res.render("login",{
        title: "Log In",
    })
});

app.post("/login", (req, res) => {
    const r_error = [];

    if(req.body.email == "")
    {
        r_error.push({u_error: `This field must be filed.`})
    }

    if(req.body.password == "")
    {
        r_error.push({p_error: `Password can't be blank.`})    
    }

    if(r_error.length > 0)
    {
        res.render("login", {
            title: "Log In",
            errorMessages: r_error
        })
    }

    else{
        res.redirect("dashboard")
    }

});

// ------------------------------MOVIES---------------------------------------

app.get("/movies/:id", (req, res) => {
    console.log(req.params.id);
    res.render("movieDesc",{
        item: fakeDB.getMovieByid(req.params.id),
        title: fakeDB.getMovieNameByid(req.params.id),
    })
})

app.get("/allMovieTV", (req, res) => {
    res.render("movielisting",{
        item: fakeDB.getAllMoviesAndTV(),
        title: "Movies and TV Shows"
    })
});

app.get("/add", (req, res) => {
    res.render("addMovie", {

    })
});

app.post("/add", (req, res) => {
    const newMovie = {
        movieName: req.body.name,
        about: req.body.about,
        imdb: req.body.imdb,
        length: req.body.length,
        tags: req.body.tags,
        releaseDate: req.body.releaseDate,
        directors: req.body.directors,
        featured: req.body.featured,
        type: req.body.type,
        Rprice: req.body.Rprice,
        Bprice: req.body.Bprice,

    }

    const movie = new movieModel(newMovie);
    movie.save()
    .then(() => {
        console.log(movie);
        res.redirect("/allMovieTV");
    })
    .catch(err=>console.log(`error occured while saving the movie ${err}`));
})

// --------------------------------DASHBOARD----------------------------------

app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "Dashboard"
    })
});


// --------------------------------WEB SERVER---------------------------------
const HTTP_PORT = process.env.PORT;
dbForMovies.initializeDB();
dbForUser.initializeDB();
app.listen(HTTP_PORT, () => {
    console.log(`Web server is up and running on port ${HTTP_PORT}`);
});    

