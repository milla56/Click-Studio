var username = "QsOKrafpmPS7P17AiEnnbsVcTSZSC40Y";
var password = "svCAQ2cLA6TauA3d";  
var searchURL = "https://api.shutterstock.com/v2/images/search?query=";

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}

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
    },
    success: function (){
        console.log('Thanks for your comment!'); 
    }
}).then(parseSearch);

}


function parseSearch(response) {
  console.log(response);

  for(var i=0; i<maxNumberOfImages; i++) {
    var image = {};
    image.url = response.data[i].assets.preview.url;
    image.height = response.data[i].assets.preview.height;
    image.width = response.data[i].assets.preview.width;
    imagesArray.push(image);
  };

  console.log(imagesArray);

  //this is in the frontendscript
  renderImages();
}
