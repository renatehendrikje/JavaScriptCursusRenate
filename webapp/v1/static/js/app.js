(function() {
 //controller function
 	var controller = {
		init: function() {
			films.init();
			router.init();
			sections.init();
		}
  	};

	var films = {
		init: function() {
			this.tapNavLinks();
			this.tapFilmElements();
		},
		tapNavLinks: function() {
			var navFilms = document.querySelectorAll('.nav-films')[0];
			var navAbout = document.querySelectorAll('.nav-about')[0];
			var aboutSection = document.querySelectorAll('.about-section')[0];
			var filmSection = document.querySelectorAll('.film-section')[0];
			Hammer(navFilms).on("tap", function(event) {
				aboutSection.classList.add('not-displayed');
				filmSection.classList.remove('not-displayed');
			});
			Hammer(navAbout).on("tap", function(event) {
				filmSection.classList.add('not-displayed');
				aboutSection.classList.remove('not-displayed');
			});
		}
		,
		tapFilmElements: function() {
			var filmElements = document.querySelectorAll('.film');
			for (var j = 0; j < filmElements.length; j++) {
				var filmElement = filmElements[j];
				Hammer(filmElement).on("tap", function(event) {
					console.info('TAP EVENT', event);
					this.classList.toggle('active');
				});
			}
		}
	};

	var router = {
		init: function() {
			routie({
				'/about': function() {
					sections.about();
				},
				'/films': function() {
					sections.movies();
				}
			});
		}
	};

	var content = {
		about: {
			title: 'Over',
			description: 'Op deze website laat ik jullie mijn favoriete films zien. Daar zaten jullie vast net op te wachten!'
		},
		movies: [
			{	title: 'My Little Pony: The Movie',
				releaseDate: '1986',
				description: 'Een hartverwarmende film over vriendschap en gekleurde ponys die kunnen praten.',
				cover: 'my-little-pony.jpg'
			}, {
				title: 'Titanic',
				releaseDate: '1997',
				description: 'Er was eens een grote boot. Er zaten heel veel mensen op. Toen zonk de boot. Behalve dat ' +
					'bijna iedereen op de boot dood was, was het ook heel tragisch dat Kate Winslet haar Leo kwijt was.',
				cover: 'titanic.jpg'
			}, {
				title: 'Bananas in Pyjamas',
				releaseDate: '1992',
				description: 'Een zeer educatieve film die je kinderen leert dat bananen ook maar mensen zijn.',
				cover: 'bananas-in-pyjamas.jpg'
			}, {
				title: 'Beethoven',
				releaseDate: '1992',
				description: 'Sint-Bernards zijn slimmer dan je denkt, dat zie je wel in deze film.',
				cover: 'beethoven.jpg'
			}
		]
	};

	var sections = {
		init: function() {
			this.about();
			this.movies();
		},
		about: function() {
			Transparency.render(document.getElementById('about'), content.about);
		},
		movies: function() {
			var directives = {
				cover: {
					src: function() {
						return 'static/images/' + this.cover;
					}
				}
			};

			Transparency.render(document.getElementById('movies'), content.movies, directives);
		}
	};

  //calling the controller function
  controller.init();
}());


//De 'movies'-array bevat voor elke film een object met de properties; 'title', 'releaseDate', 'description' en 'cover'
//stop er wat strings met tekst in