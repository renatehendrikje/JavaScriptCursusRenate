(function() {
  //controller function
  var controller = {
    init: function() {
          var filmHeaders = document.querySelectorAll('.film h3');
          var filmElements = document.querySelectorAll('.film');
          for (var i = 0; i < filmHeaders.length; i++) {
              var filmHeader = filmHeaders[i];
              console.log(filmHeader.innerHTML);
          }
          for (var j = 0; j < filmElements.length; j++) {
              var filmElement = filmElements[j];
              Hammer(filmElement).on("tap", function(event) {
                console.info('TAP EVENT', event);
                this.classList.toggle('active');
              });
          }
    },
    addFirst: function() {
          var firstFilm = document.querySelector('.film');
          firstFilm.classList.add('first');
    },
    hideNav:  function() {
          var navigation = document.querySelector('nav');
          navigation.classList.add('visually-hidden');
    }
  };

  //calling the controller function
  controller.init();
  controller.addFirst();
  controller.hideNav();
}());