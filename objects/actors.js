//Actors object
//Created by Hugo Baizan
//06/20/2012

function MovieActors() {
	console.log("creating actor...");
	this.id = 0;
	this.firstName = ko.observable();
	this.lastName = ko.observable();
	this.fullName = ko.computed(function() { return this.firstName() + " " + this.lastName();}, this);
	this.character = "";

	this.mockup = function(id) {
		this.id = id;
		this.firstName("Actor 1" + id);
		this.lastName("Last 1" + id);
		this.character = "Character 1" + id;
	};	
}
