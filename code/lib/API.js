var config = require('config') ;
var http = require('http') ;
var console = require('console') ;

function API() {
  this.getFilms = function getFilms(searchTerm) {
    var searchTerms = searchTerm.split(' ') ;
    var query = encodeURIComponent(searchTerms[0]) ;
    for (var i=1 ; i < searchTerms.length ; i++) {
      query = query + '+' + encodeURIComponent(searchTerms[i])
    } ;
    console.log('query: ', query) ;
    var api = http.getUrl(config.get('apiSearch') + '/' + query) ;
    api = JSON.parse(api);
    return api;
  };

  this.getFilmDetails = function getFilmDetails(id) {
      var api = http.postUrl(config.get('apiFilm') + '/' + id);
      api = JSON.parse(api);
      return api;
  };
  }

module.exports = {
  API: API
};