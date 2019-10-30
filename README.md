## liri-node-app

#### About the App: 
 LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives you back data.



LIRI.js can take in one of the following commands:

* concert-this

* spotify-this-song

* movie-this

* do-what-it-says
_Note: LIRI requests are rquired to follow the format: node liri.js(request)(input). The input should be enclosed in quotation marks ""



#### How to use LIRI:

Video Guide
Watch the video here - " link to my google drive video or recording of the output"

 #### Step by step instructions 


1. Open your terminal such as bash.
1. Navigate to the folder that contains the liri.js file.
1. You can choose to run any of the above four commands, which will result in your desired output. Please follow the example to run the command in your terminal


**Example 1: Run the concert-this command**


`node liri.js concert-this"name of artist or band"`

OUTPUT: The system will display a list of 5 events and locations of the bands performing. The system will also log all the results in log.text file and output will be displayed as below:

 
 ![screenshot](https://github.com/Sugeeta32/liri-node-app/blob/master/Screenshot%20(23).png)


 **Example 2:  Run the spotify-this command**


`node liri.js spotify-this-song<name of song>`

OUTPUT: The system will display the search result. The system will also log all the results in log.text file and output will be displayed as below:

![](https://github.com/Sugeeta32/Bootstrap-Portfolio/blob/master/Screenshot%20(24).png)
<screen shot of concert>
 
 **Example 3:  Run the movie-this command**


`node liri.js movie-this<movie name >`

OUTPUT: The system will display the movie search result. The system will also log all the results in log.text file and output will be displayed as below:

![](https://github.com/Sugeeta32/Bootstrap-Portfolio/blob/master/Screenshot%20(26).png)
<screen shot of concert>
 
  **Example 4:  Run the do-what-it-says command**
  
  
  `node liri.js do-what-it-says`
  OUTPUT: The system will display the search result. The output will be displayed as below:

![](https://github.com/Sugeeta32/Bootstrap-Portfolio/blob/master/Screenshot%20(29).png)

### Technologies Used
* node.js
* javascript
* APIs 
    * OMDB
    * Bands in Town
    * Spotify
* node packages:
    * Axios
    * Node-Spotify-Api
    * Moment
    * fs
    * DotEnv
* Git

    


