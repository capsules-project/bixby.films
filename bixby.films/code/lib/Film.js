var console = require('console') ;

function Film(filmDict, $vivContext) {
  var film = []
  for(var key in filmDict) {
    film.push(filmDict[key]) ;
  }
  if (film.length == 2) {
    // parseo un título en formato "Sonrisas y lágrimas (1965)"
    var title = film[0]
    if (title.split('(').length > 1) {
      title = title.split('(')
      year = title[1].split(')')
      this.year = year[0]
      title = title[0]
      this.title = title
    }
    else {
      this.title = film[0]
    }
    // de la API vuelven resultados que no tienen la id extraída de la URL, aquí spliteo la url y me quedo con el id 
    var id = film[1]
    if (id.split('/').length > 1) {
        console.log('TRue split: ', id)
        id = id.split('/');
        id = id[id.length - 1] ; 
        id = id.split('film') ;
        id = id[id.length - 1] ; 
        this.id = id ;
      }
    else {
      this.id = id
    }
  }
  if (film.length > 2) {
    this.id = id
    this.title = film[0] ;
    this.year = film[1] ;
    this.director = film[2] ;
    this.cast = film[3] ;
    this.synopsis = film[4] ;
    // accessing $vivContext to get the device
    var device = $vivContext.device ;
    console.log('device: ', device) ;
    if (device == 'bixby-mobile') {
      this.url = 'https://m.filmaffinity.com/es/movie.php?id=' + id
    }
    else {
      this.url = 'https://www.filmaffinity.com/es/film' + id + '.html' ;
    }
  } 
}

module.exports = {
  function: Film,
  Film: Film
};
