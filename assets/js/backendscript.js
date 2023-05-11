//this is necessary for the API Basic Authentication
function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

//run the API call
function doTheSearch(queryString) {
  $.ajax
  ({
    type: "GET",
    url: searchURL + queryString,
    dataType: 'json',
    async: true,
    data: '{}',
    beforeSend: function (xhr){ 
        xhr.setRequestHeader('Authorization', make_base_auth(username, password)); 
    }
}).then(parseSearch);

}

//parsing the results
function parseSearch(response) {
  
  for(var i=0; i<maxNumberOfImages; i++) {
    var image = {};
    image.url = response.data[i].assets.preview.url;
    image.height = response.data[i].assets.preview.height;
    image.width = response.data[i].assets.preview.width;
    imagesArray.push(image);
  };

  //this is in the frontendscript
  renderImages();
}
