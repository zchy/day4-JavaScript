// Ziaul
$(document).ready(function(){
	var searchBar = 
	document.getElementById("movieSearcher");

	$('#movieFound').submit(function(evt){
		evt.preventDefult();
	});

	$("#movieSearcher").keyup(function(event){
		var vauleSearch = $("#movieSearcher").val();
		if(vauleSearch.length > 3){
			$.ajax({
				type: "GET",
				url: "http://www.omdbapi.com/?apikey=62759303&",
				data: {
					t: searchBar.value //
				},
				dataType: "json",
				success: function(response){
					$('#movie-title').html("Title: " + response.Title);
					$('#poster').attr("src", response.Poster);
					$('#para').html(response.Plot);

				}

			});
		
		}

	});

});

