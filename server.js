const express = require("express");
const exphbs  = require('express-handlebars');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

const app = express();
const API = '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';
var hbs = exphbs.create({ /* config */ });

// Importing modules
const fakeDB = require("./models/FakeDB");
const fakeDBtv = require("./models/FakeDBtv");

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Defining static folder
app.use(express.static('public'));

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

        res.redirect("dashboard");
        // const {f_name, l_name, email} = req.body;


        // sgMail.setApiKey(API);
        
        // const html = `<bold><h2>Hello ${f_name} ${l_name}</h2></bold>
        // <h2>You are signed up.          
        // <br><br>
        // Regards<br>
        // Parth Patel<br>
        // CEO STREAMDOG
        // </h2>
        // `;

        // const msg = {
        //   to: `${email}`,
        //   from: {
        //       name: 'STREAMDOG',
        //       email: 'parthjpatel00@gmail.com'
        //   },
        //   subject: 'Welcome to STREAMDOG!',
        //   html: html,
        // };
        // sgMail.send(msg)
        // .then(() => {
        //     res.redirect("dashboard");
        // })
        // .catch(err => {
        //     console.log(`Error while post: ${err}`);
        // });
    } 
});

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

app.get("/movies/:id", (req, res) => {
    console.log(req.params.id);
    res.render("movieDesc",{
        item: fakeDB.getMovieByid(req.params.id),
        title: "Description",
    })
})

app.get("/allMovieTV", (req, res) => {
    res.render("movielisting",{
        item: fakeDB.getAllMoviesAndTV(),
        title: "Movies and TV Shows"
    })
});

app.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "Dashboard"
    })
})


// --------------------------------WEB SERVER---------------------------------
const HTTP_PORT = process.env.PORT || 3000;
app.listen(HTTP_PORT, () => {
    console.log(`Web server is up and running on port ${HTTP_PORT}`);
})