var config = require('config') ;
var http = require('http') ;
var _film = require('./lib/Film') ;
var console = require('console') ;

function searchFilm(searchTerm, $vivContext) {
    var films = []
    var searchTerms = searchTerm.split(' ') ;
    var query = encodeURIComponent(searchTerms[0]) ;

    for (var i=1 ; i < searchTerms.length ; i++) {
      query = query + '+' + encodeURIComponent(searchTerms[i])
    }
    var filmsList = http.getUrl(config.get('apiSearch') + '/' + query, null, null);
    var filmsList = JSON.parse(filmsList)
    console.log('searchFil, filmList: ', filmsList)
    for (var i=0 ; i < filmsList.length ; i++) {
      var film = new _film.Film(filmsList[i]) ;
      console.log('first film Parse, id: ',film.id)
      console.log('first film Parse, id: ',film.title)
      console.log('first film Parse, id: ',film.year)
      // var film = _getFilmDetail.getFilmDetail(id, $vivContext) ;
      films.push(film)
    }
    console.log('final, first films: ', films)
    return films
  } ;

module.exports = {
  function: searchFilm,
  searchFilm: searchFilm
};
