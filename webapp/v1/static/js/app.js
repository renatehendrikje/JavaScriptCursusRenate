(function() {
 //controller function
 	var controller = {
		init: function() {
			films.init();
			router.init();
		}
  	};

	var films = {
		init: function() {
			this.printHeaders();
			this.tapFilmElements();
		},
		printHeaders: function() {
			var filmHeaders = document.querySelectorAll('.film h3');
			for (var i = 0; i < filmHeaders.length; i++) {
				var filmHeader = filmHeaders[i];
				console.log(filmHeader.innerHTML);
			}
		},
		tapFilmElements: function() {
			var filmElements = document.querySelectorAll('.film');
			for (var j = 0; j < filmElements.length; j++) {
				var filmElement = filmElements[j];
				Hammer(filmElement).on("tap", function(event) {
					console.info('TAP EVENT', event);
					this.classList.toggle('active');
				});
			}
		}/*,
		addFirst: function() {
			var firstFilm = document.querySelector('.film');
			firstFilm.classList.add('first');
		},
		 hideNav:  function() {
		 var navigation = document.querySelector('nav');
		 navigation.classList.add('visually-hidden');
		 }*/
	};

	var router = {
		init: function() {
			routie({
				'/about': function() {
					console.log('"about" was clicked');
				},
				'/films': function() {
					console.log('"films" was clicked');
				}
			});
		}
	};

	var content = {
		about: {
			titel: 'Over deze website',
			description: ''
		},
		movies: []
	};


  //calling the controller function
  controller.init();
}());

//Het 'about'-object bevat twee properties; 'titel' en 'description'
//De 'movies'-array bevat voor elke film een object met de properties; 'title', 'releaseDate', 'description' en 'cover'
//stop er wat strings met tekst in