const express = require("express");
const movieModel = require("../models/movieDB");


module.exports.featTv = function(){
    return new Promise((resolve, reject) => {
        movieModel.find({featured: 1, type:"tv"})
        .exec()
        .then((returnedItem) => {
            if(returnedItem.length != 0)
            {
                resolve(returnedItem.map(item=>item.toObject()));
            }
            else
            {
                reject("Item not found!" + err);
            }
        })
        .catch((err) => {
            reject("Error occured!" + err);
        });
    });
}