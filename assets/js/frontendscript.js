function initVariables() {
  picturesDiv.empty();
  imagesArray = [];
  videosArray = [];
}


//Initialise the variables, get the input query and do the search in the backend
function prepareSearch() {
  initVariables();

  //see the structure in globalvariables
  searchString = searchInput.val().trim();

  //this is in the backendscript, and it will call the image and video search
  //the second API call is chained into the backendscript.js parseImageSearch() function
  doTheImageSearch(searchString);
}


//manipulate DOM to add a row to the pictures grid with the columns
//the columns varies between 2 and 3 to make the visuals more interesting
//the first flag parameter tells what kind of element is in the grid cell
function renderRow(flag, numberOfColumns, subArrayImages) {
  var rowDiv = $("<div>");
  rowDiv.addClass("row");
  for(var i=0; i<numberOfColumns; i++) {
    var colDiv = $("<div>");
    //the 12/numberOfColumns is for the BootStrap calculation (BootStrap has always 12 columns)
    colDiv.addClass("col-md-" + (12/numberOfColumns) + " col-sm-12 grid-gap" );

    if(flag === "image") {
      var image = $("<img>");
      image.width = subArrayImages[i].width;
      image.height = subArrayImages[i].height;
      image.attr("src", subArrayImages[i].url);
      image.addClass(classNameGridImages);
  
      colDiv.append(image);
    } else if (flag === "video") {
      var video = $("<video>");
      video.attr("controls", "muted");
      video.addClass(classNameGridVideos);

      var source = $("<source>");
      source.attr("src", subArrayImages[i].url);
      source.attr("type", "video/webm");
      
      video.append(source);
      colDiv.append(video);
    }
  
    rowDiv.append(colDiv);
  }

  return rowDiv;
}

function renderImages() {
  var pointer = 0;

  var col2 = 2;
  var col3 = 3;
  var numOfColumns = col3;

  while(pointer < imagesArray.length) {

    if(numOfColumns === col3) {
      numOfColumns = col2;
    } else if (numOfColumns === col2) {
      numOfColumns = col3;
    }

    var endPointer = pointer + numOfColumns;
    if(endPointer > imagesArray.length) {
      endPointer = imagesArray.length;
    }
    var renderedRow = renderRow("image", numOfColumns, imagesArray.slice(pointer, endPointer));
    pointer += numOfColumns;
    picturesDiv.append(renderedRow);  
  }
}


function renderVideos() {
  var pointer = 0;

  var col2 = 2;
  var col3 = 3;
  var numOfColumns = col3;

  while(pointer < videosArray.length) {
    if(numOfColumns === col3) {
      numOfColumns = col2;
    } else if (numOfColumns === col2) {
      numOfColumns = col3;
    }

    var endPointer = pointer + numOfColumns;
    if(endPointer > videosArray.length) {
      endPointer = videosArray.length;
    }

    var renderedRow = renderRow("video", numOfColumns, videosArray.slice(pointer, endPointer));
    pointer += numOfColumns;
    picturesDiv.append(renderedRow);  
  }  
}

//filling the grid. first display the images, then the videos
function renderGrid() {
  renderImages();
  renderVideos();
}


// CLICK HANDLERS
// ==========================================================
searchButton.on("click", function(event) {
  event.preventDefault();
  prepareSearch();
});


// Keypress HANDLERS
// ==========================================================
searchInput.on("keypress", function(event) {
  //do the search when the Enter is pressed
  if(event.which === 13) {
    prepareSearch();
  }
});