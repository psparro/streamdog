const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    
    firstName :
    {
        type:String,
        required:true
    },

    lastName :
    {
        type:String,
        required:true
    },
    email:
    {
        type:String,
        required:true,
        unique: true
       },
    password:
    {
        type:String,
        required:true
    },
    type:
    {
        type:String,
        default:"User"
    }
});

userSchema.pre("save", function (next) {
    // salt generates random text and it is passed with password and generates a string
    bcrypt.genSalt(12)
    .then((salt) => {
        bcrypt.hash(this.password, salt)
        .then((encryptPassword) => {
            this.password = encryptPassword;
            next();
        })
        .catch(err => console.log(`Error occured when hashing: ${err}`));
    })
    .catch(err => console.log(`Error occured when salting: ${err}`));
})

const UserModel = mongoose.model('User', userSchema);


module.exports = UserModel;