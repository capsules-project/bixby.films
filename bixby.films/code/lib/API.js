// var config = require('config') ;
// var http = require('http') ;
// var console = require('console') ;

// function API() {
//   this.searchFilm = function searchFilm(searchTerm) {
//     console.log(searchTerm)
//     var searchTerms = searchTerm.split(' ') ;
//     console.log(searchTerms)
//     var query = encodeURIComponent(searchTerms[0]) ;

//     for (var i=1 ; i < searchTerms.length ; i++) {
//       query = query + '+' + encodeURIComponent(searchTerms[i])
//     }
//     var films = http.getUrl(config.get('apiSearch') + '/' + query, null, null);
//     return films
//   }
//   this.getFilmDetail = function getFilmDetail(id) {
//     var film = http.getUrl(config.get('apiFilm') + '/' + id, null, null);
//     return film
//   }
// }