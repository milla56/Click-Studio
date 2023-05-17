/* API variables */
var username = "QsOKrafpmPS7P17AiEnnbsVcTSZSC40Y";
var password = "svCAQ2cLA6TauA3d";  
var searchImageURL = "https://api.shutterstock.com/v2/images/search?query=";
var searchVideoURL = "https://api.shutterstock.com/v2/videos/search?query=";


/* map between the javascript and HTML elements */
var searchButton = $("#searchButton");
var searchInput = $("#search-input");
var picturesDiv = $("#pictures");

var classNameGridImages = "grid-images";
var classNameGridVideos = "grid-videos";

//localstorage key name
var localStorageClickStudioSearch = "ClickStudio-Search";

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


//useful information for video display
var videoData = {
  "url": "",
};

//the videoArray will hold videoData objects
var videosArray = [];
