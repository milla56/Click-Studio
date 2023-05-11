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

function renderImages() {
  for(var i=0; i<imagesArray.length; i++) {
    var image = $("<img>");
    image.attr("id", idImage + i);
    image.width = imagesArray[i].width;
    image.height = imagesArray[i].height;
    image.attr("src", imagesArray[i].url);

    picturesDiv.append(image);
  }
}