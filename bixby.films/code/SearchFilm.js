var config = require('config') ;
var http = require('http') ;
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

module.exports.function = function searchFilm(searchTerm) {
    var searchTerms = searchTerm.split(' ') ;
    var query = encodeURIComponent(searchTerms[0]) ;

    for (var i=1 ; i < searchTerms.length ; i++) {
      query = query + '+' + encodeURIComponent(searchTerms[i])
    }
    var films = http.getUrl(config.get('apiSearch') + '/' + query, null, null);
    return films
  }