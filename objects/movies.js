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
}

function MovieDescription() {
	this.summary = "";
	this.benefits = "";
	this.awards = "";
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
