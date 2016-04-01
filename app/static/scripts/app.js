
  $(document).on('click','img',function(){
    console.log($(this)[0].id)
    var tag = $(this)[0].id
    // alert('you clicked on image:' + tag);
    console.log("video loading... ", tag)
    loadvideo(tag);

  });



function init() {
    gapi.client.setApiKey("AIzaSyBvqOxRlmjWvcajEYHtBfn0IQYGRWUgOm8");
    gapi.client.load("youtube", "v3", function() {
        console.log("Google API is loaded.")
        handleAPILoaded()
    });
}

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}





function loadvideo(video_id) {
	var htmlStr = "";
	htmlStr += "<iframe class='video' width='640' height='360' src='//www.youtube.com/embed/";
	htmlStr += video_id
	htmlStr += "' frameborder='0'></iframe>";

	$('#player').html(htmlStr);
}


// Search for a specified string.
function search() {
	var request = gapi.client.youtube.search.list({
	    part: "snippet",
	    type: "video",
	    q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
	    maxResults: 4,
	    order: "viewCount",
	    publishedAfter: "2016-01-01T00:00:00Z"
	});

  	request.execute(function(response) {
    	var str = JSON.stringify(response.result);
    	var htmlStr = "";
    	$.each(response.result.items, function(index, item) {
	      htmlStr += "<div class='video'>";
	      htmlStr += "<a href='add/" + item.id.videoId + "'>Add</a><br>";	      
	      htmlStr += "<img src='https://i.ytimg.com/vi/" + item.id.videoId + "/default.jpg' id=" + item.id.videoId + " alt='" + item.snippet.title + "'>";
	      htmlStr += "</div>";
	  	});

    	// $('#results').html('<h1>' + response.result.items[0].id.videoId + '</h1>');
    	$('#results').html(htmlStr);

  });
}

