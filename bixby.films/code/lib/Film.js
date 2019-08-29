var console = require('console') ;

function Film(filmDict, id) {
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
}

module.exports = {
  function: Film,
  Film: Film
};
