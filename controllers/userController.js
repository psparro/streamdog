const express = require("express");
const userModel = require("../models/userDB");
const sgMail = require('@sendgrid/mail');
const bcrypt = require('bcryptjs');
const isLoggedIn = require("../middleware/auth");
const dashboardLoader = require("../middleware/authorization")


const router = express.Router();

router.get("/login", (req,res)=>{
    res.render("login",{
        title: "Log In",
    })
});

router.post("/login", (req, res) => {
    const r_error = [];

    /* if(req.body.email == "")
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
       // res.redirect("addMovie")*/

       userModel.findOne({email:req.body.email})
    .then(user=>{ 
        //email is not found
        if(user==null)
        {
            r_error.push({o_error: `Incorrect cradentials`});
            res.render("login", { 
                title: "Log In",
            errorMessages: r_error
             });
        } 
        //email is found
        else{
            bcrypt.compare(req.body.password,user.password)
            .then(isMatched=>{
                if(isMatched)
                {
                    req.session.userInfo = user;                    
                   res.redirect("/user/dashboard");
                    
                }
                else{
                    r_error.push({o_error: `Incorrect cradentials`});
                    res.render("login", { 
                        title: "Log In",
                    errorMessages: r_error
                     });
                }
            })
    .catch(err => console.log(`Error happened when compare password: ${err}`));

        }
    })
    .catch(err => console.log(`Error happened when finding user in the database during login: ${err}`));
    }

);

router.get("/signup", (req,res)=>{
    res.render("signup",{
        title: "Sign Up",
    })
});

router.post("/signup", (req,res) => {
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
                req.session.userInfo = user;
                res.redirect("/user/dashboard");
            })
        })
        .catch(err => {
            console.log(`Error while post: ${err}`);
        });
    } 
});

router.get("/logout",(req,res)=>{

    req.session.destroy();
    res.redirect("/user/login");
    
    })

router.get("/dashboard", isLoggedIn, dashboardLoader, (req, res) => {
    res.render("dashboard", {
        title: "Dashboard"
    })
});

router.get("/admindashboard", isLoggedIn, (req, res) => {
    res.render("adminDashboard", {
        title: "Admin Dashboard"
    })
});

module.exports = router;