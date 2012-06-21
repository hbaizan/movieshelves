// This is the main application object
//Created by Hugo Baizan
//06/20/2012

var MovieShelves = function() {
	var self = this;
	
	//Data
	self.movies = ko.observableArray();
	self.selectedMovie = ko.observable();

	//Behaviors
	console.log("Initiating...");

	self.selectMovie = function(thisMovie) {
		self.selectedMovie(thisMovie);
	}
}

var myCollection = new MovieShelves();
ko.applyBindings(myCollection);
