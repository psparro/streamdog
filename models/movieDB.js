const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    movieName:{
        type:String,
        require: true
    },

    about:{
        type:String,
        require: true
    },

    imdb:{
        type: Number,
        require: true
    },

    length:{
        type:String,
        require: true
    },

    tags:{
        type:String,
        require: true
    },

    releaseDate:{
        type:String,
        require: true
    },

    directors:{
        type:String,
        require: true
    },

    featured:
    {
        type: Number,
        default: 0,
        require: true
    },

    type:{
        type:String,
        require: true
    },

    Rprice:{
        type: Number,
        require: true
    },

    Bprice:{
        type: Number,
        require: true
    },

    regPoster:
    {
        type: String,
        require: true
    },

    bigPoster:
    {
        type: String,
        require: true
    }
});

const movieModel = mongoose.model('Movie', movieSchema);

module.exports = movieModel;