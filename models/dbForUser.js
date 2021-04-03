const mongoose = require('mongoose');

// verify the db connection
module.exports.initializeDB = function(){
    mongoose.connect(process.env.MONGODB_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("Connected to user database!");
    })
    .catch((err) => {
        console.log(`Error occured when connecting to database: ${err}`);
    });
}

