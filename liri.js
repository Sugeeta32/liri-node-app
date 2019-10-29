//environment variables with the dotenv package:
require("dotenv").config();
//import the keys.js file and store it in a variable.
var keys = require("./keys.js");
//npm install fs-extra

var fs = require("fs-extra");
var Spotify = require("node-spotify-api");
//Include the axios npm package
var axios = require("axios");
//Include the moment npm package
var moment = require("moment");

//access your keys information
var spotify = new Spotify(keys.spotify);

// var to capture user inputs

var request = process.argv[2]
var input = process.argv[3]


//Using switch to choose the functions when user selects between options
userInput();
function userInput() {
    switch (request) {
        case "spotify-this-song": spotifyThis();
            break;
        case "movie-this": movieThis();
            break;
        case "concert-this": concertThis();
            break;
        case "do-what-it-says": DoWhatItSays();
            break;

    }
}

// You'll use Axios to grab data from the [OMDB API]


function movieThis() {
    if (input === undefined) {
        input = "Mr.Nobody"
        console.log("******************");
        fs.appendFile("log.txt", "************\n");
        console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
        fs.appendFile("log.txt", "If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/\n");
        console.log("It's on Netflix");
        fs.appendFile("log.txt", "Its on Netflix\n")
    }

    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy").then(
        function (response) {
            console.log("Title: " + response.data.Title);
            fs.appendFile("log.txt", "Title: " + response.data.Title + "\n");



            console.log("Year: " + response.data.Year);
            fs.appendFile("log.txt", " Year:" + response.data.Year + "\n");
            console.log("Ratings : " + response.data.Ratings[0]);
            fs.appendFile("log.txt", " Ratings:" + response.data.Ratings[0] + "\n");
            console.log("Country: " + response.data.Country);
            fs.appendFile("log.txt", " Country:" + response.data.Country + "\n");
            console.log("Language: " + response.data.Language);
            fs.appendFile("log.txt", " Language:" + response.data.Language + "\n");
            console.log("Plot: " + response.data.Plot);
            fs.appendFile("log.txt", " Plot:" + response.data.Plot + "\n");
            console.log("Actors: " + response.data.Actors);
            fs.appendFile("log.txt", " Actors:" + response.data.Actors + "\n");
        }

    )
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
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

}

function spotifyThis() {
    if (input === undefined) {
        input = "The Sign"
    }

    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        //   console.log(data.tracks.items[0]);
        console.log("Artist:" + data.tracks.items[0].artists[0].name);
        console.log(`Title: ${data.tracks.items[0].name}`);
        console.log(`Preview: ${data.tracks.items[0].preview_url}`);
        console.log(`Album: ${data.tracks.items[0].album.name}`);


    });

}


//Bands in Town Artist Events API
function concertThis() {
    axios.get("http://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < 5; i++) {
                // handle success
                console.log("Name of the Venue: " + response.data[i].venue.name);
                console.log("Venue Location or City: "+response.data[i].venue.city);
                console.log("Date of the Event: "+ moment(response.data[i].datetime).format("MM/DD/YYYY"));
                //console.log(moment("Date: "+response.data[i].datetime).format("YYYY-MM-DD hh:mm:ss a"));
            }
            
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
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

}
