
const express = require("express");
const router = express.Router();
const fakeDB = require("../models/FakeDB");
const movieModel = require("../models/movieDB");
const featTv = require("./featTv");


router.get("/", (req, res) => {
    //console.log("-Home-")
    movieModel.find({featured: 1, type:"movie"})
    .then((returnedItems) => {
        const filteredMovies = returnedItems.map(item => {
            return{
                id: item._id,
                movieName: item.movieName,
                about: item.about,
                imdb: item.imdb,
                length: item.length,
                tags: item.tags,
                releaseDate: item.releaseDate,
                directors: item.directors,
                type: item.type,
                Rprice: item.Rprice,
                Bprice: item.Bprice,
                featured: item.featured,
                regPoster: item.regPoster,
                bigPoster: item.bigPoster
            }
        });
        res.render("home",{
            
            title: "Home",
            featuredMovies: filteredMovies,
            featuredTV: featTv.featTv(),
        });
    })
    .catch((err) => {
        reject("Error occured!" + err);
    });
});

module.exports = router;