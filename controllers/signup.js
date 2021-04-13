const express = require("express");
const router = express.Router();

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

module.exports = router;