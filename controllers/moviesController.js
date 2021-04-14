const express = require("express");
const router = express.Router();
const movieModel = require("../models/movieDB");
const path = require("path");

const fakeDB = require("../models/FakeDB");

router.get("/add", (req, res) => {
    res.render("addMovie", {

    })
});

router.post("/add", (req, res) => {
    const newMovie = {
        movieName: req.body.name,
        about: req.body.about,
        imdb: req.body.imdb,
        length: req.body.length,
        tags: req.body.tags,
        releaseDate: req.body.releaseDate,
        directors: req.body.directors,
        // featured: req.body.featured,
        type: req.body.type,
        Rprice: req.body.Rprice,
        Bprice: req.body.Bprice,

    }

    const movie = new movieModel(newMovie);
    movie.save()
    .then((movie) => {
        req.files.regPoster.name = `regPoster_${movie.movieName}${path.parse(req.files.regPoster.name).ext}`;
        req.files.regPoster.mv(`public/images/regPosters/${req.files.regPoster.name}`)
        .then(() => {
            movieModel.updateOne({_id:movie._id}, {
                regPoster: req.files.regPoster.name
            })
            .then(() => {
                res.redirect(`/movies/${movie._id}`);
            })
        })
        
    })
    .catch(err=>console.log(`error occured while saving the movie ${err}`));
});

router.get("/movies/:id", (req, res) => {
    console.log(req.params.id);
    
    movieModel.findById(req.params.id)
    .then((movie) => {
        const {movieName, about, imdb,
            length, tags, releaseDate,
            directors, Rprice, Bprice, 
            regPoster} = movie;
        
        res.render("movieDesc",{
            movieName, about, imdb,
            length, tags, releaseDate,
            directors, Rprice, Bprice, 
            regPoster
        })
    })
    .catch(err => console.log(`Error: ${err}`))
    
})

router.get("/allMovieTV", (req, res) => {
    res.render("movielisting",{
        item: fakeDB.getAllMoviesAndTV(),
        title: "Movies and TV Shows"
    })
});
module.exports = router;