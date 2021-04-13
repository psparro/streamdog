
const express = require("express");
const router = express.Router();
const fakeDB = require("../models/FakeDB");


router.get("/", (req, res) => {
    res.render("home",{
        title: "Home",
        featuredMovies: fakeDB.getFeaturedMovie(),
        featuredTV: fakeDB.getFeaturedTV(),
    });
});

module.exports = router;