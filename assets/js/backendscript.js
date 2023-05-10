console.log("Hello :)");

var username = "QsOKrafpmPS7P17AiEnnbsVcTSZSC40Y";
var password = "svCAQ2cLA6TauA3d";  

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}
$.ajax
  ({
    type: "GET",
    url: "https://api.shutterstock.com/v2/images/search",
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

function parseSearch(response) {
  console.log(response);
  imageDiv = $("#imagediv");

  img = $("<img>");
  img.attr("src", response.data[1].assets.huge_thumb.url);

  imageDiv.append(img);
}