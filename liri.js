//environment variables with the dotenv package:
require("dotenv").config();
//import the keys.js file and store it in a variable.
var keys = require("./keys.js");
//npm install fs-extra

var fs = require('fs-extra');
var Spotify = require('node-spotify-api');
//Include the axios npm package
var axios = require('axios');
//Include the moment npm package
var moment = require('moment');

//access your keys information
var spotify = new Spotify(keys.spotify);


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy").then(
    function (response) {
        console.log("The movie's rating is: " + response.data.imdbRating);
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
