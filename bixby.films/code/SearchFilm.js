var config = require('config') ;
var http = require('http') ;
var _getFilmDetail = require('GetFilmDetail') ;
var console = require('console') ;
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
      var id = filmsList[i]['id'] ;
      // error check
      if (id.split('/').length > 1) {
        console.log('TRue split: ', id)
        id = id.split('/');
        id = id[id.length - 1] ; 
        id = id.split('film') ;
        id = id[id.length - 1] ; 
      }
      console.log('searchFil, id: ',id)
      var film = _getFilmDetail.getFilmDetail(id, $vivContext) ;
      films.push(film)
    }
    console.log('final, films: ', films)
    return films
  } ;

module.exports = {
  function: searchFilm,
  searchFilm: searchFilm
};
