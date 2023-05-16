//this is necessary for the API Basic Authentication
function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

//run the Image Search API call
function doTheImageSearch(queryString) {
  $.ajax
  ({
    type: "GET",
    url: searchImageURL + queryString,
    dataType: 'json',
    async: true,
    data: '{}',
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', make_base_auth(username, password)); 
    }
}).then(parseImageSearch);

}

//parsing the results
function parseImageSearch(response) {
  
  for(var i=0; i<maxNumberOfImages; i++) {
    var image = {};
    image.url = response.data[i].assets.preview.url;
    image.height = response.data[i].assets.preview.height;
    image.width = response.data[i].assets.preview.width;
    imagesArray.push(image);
  };

  //chaining the second API call
  doTheVideoSearch(searchString);
}


//run the Video Search API call
function doTheVideoSearch(queryString) {
  $.ajax
  ({
    type: "GET",
    url: searchVideoURL + queryString,
    dataType: 'json',
    async: true,
    data: '{}',
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', make_base_auth(username, password)); 
    }
}).then(parseVideoSearch);
}

//parsing the results
function parseVideoSearch(response) {
  var tmpCount = 0;

  if (maxNumberOfImages > response.data.length) {
    tmpCount = response.data.length;
  } else {
    tmpCount = maxNumberOfImages;
  }
  
  for(var i=0; i<tmpCount; i++) {
    var video = {};
    video.url = response.data[i].assets.thumb_webm.url;
    videosArray.push(video);
  };

  //this is in the frontendscript
  renderGrid();
}