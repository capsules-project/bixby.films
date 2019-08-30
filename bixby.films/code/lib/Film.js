var console = require('console') ;

function Film(filmDict, id, $vivContext) {
  var film = []
  for(var key in filmDict) {
    film.push(filmDict[key]) ;
  }
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

module.exports = {
  function: Film,
  Film: Film
};
