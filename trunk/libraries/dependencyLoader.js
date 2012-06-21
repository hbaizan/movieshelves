
Pyramid.rootPath = './';

//note that no template was defined?  This means that the code will be inserted directly into the page
/*Pyramid.setTypeRenderer(
{ name: 'template',
	isExtension: true
});*/


//Set up file dependencies
Pyramid.newDependency({
    name: 'standard',
    files: [
    'libraries/jquery-1.7.2.min.js',
	 'libraries/knockout-2.1.0.js'
    ]
});

Pyramid.newDependency({
name:'lookAndFeel',
files: [
	'libraries/bootstrap/css/bootstrap.css'
    ]
});

/*Pyramid.newDependency({
name:'templates',
files: [
	'templates/movie-tree-short-template.template'
	]
});*/
Pyramid.newDependency({
name:'main',
files: [
	'objects/movies.js',
	'objects/actors.js',	
	'MovieShelves.js'
   ],
    dependencies: ['standard','lookAndFeel']
});
