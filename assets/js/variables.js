var searchButton = $("#searchButton");
var searchInput = $("#search-input");
var picturesDiv = $("#pictures");

var idImage = "image";

//this is the search string entered to the inpt field
var searchString = "";

//this will tell how much picture will be processed from the API and displayed on the screen
var maxNumberOfImages = 15;

var imageData = {
  "url": "",
  "width": "",
  "height": ""
};

//the imageArray will hold imageData objects
var imagesArray = [];
