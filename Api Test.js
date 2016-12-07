 //key: AIzaSyBtR79on5hDbVHQsghlPlLSTOOLI2zIHmI

var url = 'https://www.googleapis.com/youtube/v3/search';

function ifSuccessful (response) {
console.log("Request successful", response);

}

var params = {
	part:'snippet',
	key:'AIzaSyBtR79on5hDbVHQsghlPlLSTOOLI2zIHmI',
	q:"SOMETHING"
}


function newQuery(query) {//change query to what's in the input
	params.q= $("#query").val(); 
	
};

$('.sub').on('click', function() {
	newQuery();
	$.getJSON(url, params, function(response){

		console.log("Request successful", response)
		renderSearchResults(response);
	})
});


// Display Function

function renderSearchResults(response) {
	var response = response;
	var picturesHTML = '';
	for (var i = 0; i < response.items.length; i++) {
	picturesHTML += `<img src='${response.items[i].snippet.thumbnails.medium.url}'</br>`;
	
	}
	var videoId = response.items[0].id.videoId;
	$('#search-container').on('click', 'img',  function() {
		$('img').append(`<iframe src='https://www.youtube.com/watch?v=${videoId}'>`)
		console.log(response.items[0].id.videoId);

		
	})
	

	$('#search-container').html(picturesHTML);


}


















// $('.sub').on('click', function(params) {
// $.ajax( {
// 	url: url,
// 	settings:params,
// 	data: {
// 			format: 'json'
// 	},
// 	error: function() {
// 		$('#search-container')
// 		.append('<br /> <p>We have encountered an error</p>');
// 	},
// 	success: function(response) {
// 		$('#search-container')
// 		.append(`<br /> <p> the response we got was ${response}`)

// 			},
// 		type: 'GET'
// 		})
// 	})

	