
const express = require("express");
const router = express.Router();
const movieModel = require("../models/movieDB");

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
    .then(() => {
        res.redirect("/allMovieTV");
    })
    .catch(err=>console.log(`error occured while saving the movie ${err}`));
})

// module.exports = router;