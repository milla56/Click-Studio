/* API variables */
var username = "QsOKrafpmPS7P17AiEnnbsVcTSZSC40Y";
var password = "svCAQ2cLA6TauA3d";  
var searchURL = "https://api.shutterstock.com/v2/images/search?query=";

/* map between the javascript and HTML elements */
var searchButton = $("#searchButton");
var searchInput = $("#search-input");
var picturesDiv = $("#pictures");

//this is the search string entered to the inpt field
var searchString = "";

//this will tell how much picture will be processed from the API and displayed on the screen
var maxNumberOfImages = 15;


//useful information for image display
var imageData = {
  "url": "",
  "width": "",
  "height": ""
};

//the imageArray will hold imageData objects
var imagesArray = [];
