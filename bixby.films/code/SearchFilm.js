var config = require('config') ;
var http = require('http') ;
var _getDetail = require('GetFilmDetail')
////// fail
// var _api = require('./lib/API') ;
// var console = require('console') ;

// function searchFilm (searchTerm) {
//   var api = new _api.API()
//   var film = api.searchFilm(searchTerm)
//   console.log(film)
//   // for (var i=0 ; i < films.length ; i++) {
//   //   films = query + '+' + encodeURIComponent(searchTerms[i])
//   // }
//   return film
// }

// module.exports = {
//   function: searchFilm,
//   searchFilm: searchFilm
// };
/////

function filmId(filmData) {
  this.id = filmData['id']
}

module.exports.function = function searchFilm(searchTerm) {
    var searchTerms = searchTerm.split(' ') ;
    var query = encodeURIComponent(searchTerms[0]) ;

    for (var i=1 ; i < searchTerms.length ; i++) {
      query = query + '+' + encodeURIComponent(searchTerms[i])
    }
    var filmsList = http.getUrl(config.get('apiSearch') + '/' + query, null, null);
    var filmsList = JSON.parse(filmsList)

    for (var i=0 ; i < filmsList.length ; i++) {
      var id = filmId(filmsList[i]) ;
      var film = new _getDetail.GetFilmDetail(filmsList[i]['id']) ;
      // film = new _film.Film(filmsData[i].title, filmsData[i].year, filmsData[i].id, filmsData[i].director, filmsData[i].cast, filmsData[i].synopsis) ;
    }
    return film
  }