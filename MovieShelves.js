// This is the main application object
//Created by Hugo Baizan
//06/20/2012

var MovieShelves = function(mockup) {
	var self = this;
	
	//Data
	self.movies = ko.observableArray();
	self.selectedMovie = ko.observable();

	//Behaviors
	console.log("Initiating...");

	self.selectMovie = function(thisMovie) {
		self.selectedMovie(thisMovie);
	}

	if(mockup) {
		for(var index=1; index<20; index++) {
			var movie = new Movie();
			movie.mockup(index);
			self.movies.push(movie);
		}
	}
}

var myCollection = new MovieShelves(true);
ko.applyBindings(myCollection);
