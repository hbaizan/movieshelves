for(var index=1; index<20; index++) {
	var movie = new Movie();
	movie.general.title = "Movie " + index;
	movie.general.originalTitle = "Pelicula " + index;
	myCollection.movies.push(movie);
}
