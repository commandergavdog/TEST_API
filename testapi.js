// Initial array of movies
var songs = ["Strawberry Fields Forever", "Blackbird", "Hey, Jude", "When You Were Young"];

  var song = $(this).attr("data-name");
  var queryURL = "https://api.musixmatch.com/ws/1.1/track.search?q_track=revolution%9&apikey=ed7872ae8c7eb0045a2017ba672f09a8";
  

  // Creating an AJAX call for the specific movie button being clicked
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

  });



