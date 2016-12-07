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


$('.sub').on('click', function() {

	$.getJSON(url, params, function(response){

		console.log("Request successful", response)
		renderSearchResults(response);
	})
});


// Display Function

function renderSearchResults(response) {
	var picturesHTML = '';
	for (var i = 0; i < response.items.length; i++) {
	picturesHTML += `<img src='${response.items[i].snippet.thumbnails.medium.url}'</br>`;
	}
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

	