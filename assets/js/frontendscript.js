function initVariables() {
  picturesDiv.empty();
  imagesArray = [];
}


//Initialise the variables, get the input query and do the search in the backend
function prepareSearch() {
  initVariables();

  //see the structure in globalvariables
  searchString = searchInput.val().trim();

  //this is in the backendscript
  doTheSearch(searchString);
}


//manipulate DOM to add a row to the pictures grid with the columns
//the column is randomly generated
function renderRow(numberOfColumns, subArrayImages) {
  var rowDiv = $("<div>");
  rowDiv.addClass("row");
  for(var i=0; i<numberOfColumns; i++) {
    var colDiv = $("<div>");
    //the 12/numberOfColumns is for the BootStrap calculation (BootStrap has always 12 columns)
    colDiv.addClass("col-md-" + (12/numberOfColumns) + " col-sm-12 grid-gap" );
  
    var image = $("<img>");
    image.width = subArrayImages[i].width;
    image.height = subArrayImages[i].height;
    image.attr("src", subArrayImages[i].url);
    image.addClass("grid-images");

    colDiv.append(image);
    rowDiv.append(colDiv);
  }

  return rowDiv;
}

//this generates a random number between min and max
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

//filling the pictures grid. The columns are swapped between 2 and 3
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
    var renderedRow = renderRow(numOfColumns, imagesArray.slice(pointer, endPointer));
    pointer += numOfColumns;
    picturesDiv.append(renderedRow);  
  }
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