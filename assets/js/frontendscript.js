function initVariables() {
  picturesDiv.empty();
  imagesArray = [];
}

function prepareSearch() {
  initVariables();

  //see the structure in globalvariables
  searchString = searchInput.val().trim();
  console.log(searchString);

  //this is in the backendscript
  doTheSearch(searchString);
}

// CLICK HANDLERS
// ==========================================================
searchButton.on("click", function(event) {
  event.preventDefault();
  prepareSearch();
});

searchInput.on("keypress", function(event) {
  //event.preventDefault();
  if(event.which === 13) {
    prepareSearch();
  }

});


function renderRow(numberOfColumns, subArrayImages) {
  var rowDiv = $("<div>");
  rowDiv.addClass("row");
  for(var i=0; i<numberOfColumns; i++) {
    var colDiv = $("<div>");
    colDiv.addClass("col-md-" + (12/numberOfColumns) + " col-sm-12 grid-gap" );
  
    var image = $("<img>");
    //image.attr("id", idImage + i);
    image.width = subArrayImages[i].width;
    image.height = subArrayImages[i].height;
    image.attr("src", subArrayImages[i].url);

    colDiv.append(image);
    rowDiv.append(colDiv);
    
  }

  return rowDiv;

}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}


function renderImages() {
  var pointer = 0;
  var previousNumOfColumns = 0;

  while(pointer < imagesArray.length) {
    var numOfColumns = randomIntFromInterval(2, 3);
    if(numOfColumns === previousNumOfColumns) {
      numOfColumns = randomIntFromInterval(2, 4);
    }

    var renderedRow = renderRow(numOfColumns, imagesArray.slice(pointer, pointer + numOfColumns));
    pointer += numOfColumns;
    picturesDiv.append(renderedRow);
  
  }

  // for(var i=0; i<imagesArray.length; i++) {
  //   var image = $("<img>");
  //   image.attr("id", idImage + i);
  //   image.width = imagesArray[i].width;
  //   image.height = imagesArray[i].height;
  //   image.attr("src", imagesArray[i].url);

  //   picturesDiv.append(image);
  // }
}