//Movies object
//Created by Hugo Baizan
//06/20/2012

function Movie() {
	console.log("creating movie...");
	this.id = 0;
	this.general = new MovieGeneral();
	this.description = new MovieDescription();
	this.others = new MovieOthers();
	this.comments = new MovieComments();
	this.actors = new MovieActors();
	this.images = new MovieImages();
	this.editions = new MovieEditions();
	this.seasons = new MovieSeasons();

	this.mockup = function(id) {
		this.id = id;
		this.general.mockup(id);
		this.actors.mockup(id);
		this.description.mockup();
	};
}

function MovieGeneral() {
	this.title = "";
	this.originalTitle = "";
	this.myRate = 0;
	this.year = 0;
	this.duration = 0;
	this.collection = false;
	this.seen = false;
	this.wanted = false;
	this.sale = false;
	this.gender = "";

	this.mockup = function(id) {
		this.title = "Movie " + id;
		this.gender = "Action";
		this.year = 1919;
		this.originalTitle = "Pelicula " + id;
		this.duration = 120;
	}
}

function MovieDescription() {
	this.summary = "";
	this.benefits = "";
	this.awards = "";

	this.mockup = function() {
		this.summary = "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
	}
}

function MovieOthers() {
	
}

function MovieComments() {
	
}

function MovieActors() {
	
}

function MovieImages() {
	
}

function MovieEditions() {
	
}

function MovieSeasons() {
	
}
