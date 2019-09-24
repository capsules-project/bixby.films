var config = require('config') ;
var http = require('http') ;
var console = require('console') ;

function API() {
  this.getFilms = function getFilms(searchTerm) {
    var searchTerms = searchTerm[0] ;
    if (searchTerm.length > 1) {
      for (var i=1 ; i < searchTerm.length ; i++) {
        var searchTermList = searchTerms + searchTerm[i] ;
        var searchTermList = searchTermList.split(' ') ;
      }
    }
    else {
      var searchTermList = searchTerms.split(' ') ;
    }
    var query = encodeURIComponent(searchTermList[0]) ;
    for (var i=1 ; i < searchTermList.length ; i++) {
      query = query + '+' + encodeURIComponent(searchTermList[i])
    } ;
    // console.log('query: ', query) ;
    var api = http.getUrl(config.get('apiSearch') + '/' + query) ;
    api = JSON.parse(api);
    return api;
  };

  this.getFilmDetails = function getFilmDetails(id) {
      var api = http.getUrl(config.get('apiFilm') + '/' + id);
      api = JSON.parse(api);
      return api;
  };
  }

module.exports = {
  API: API
};