var config = require('config') ;
var http = require('http') ;
var console = require('console') ;

function API() {
  this.getConfig = function getConfig() {
    var query = http.makeQueryString({
      "api_key": "fd54ccf1ef3a6b27f6f0f62a20a5cc96"
    });
    var api = http.getUrl(config.get('apiConfig') + '?' + query)
    // console.log(api)
    api = JSON.parse(api);
    return api;
  };

  this.getFilms = function getFilms(searchTerm) {
    var query = http.makeQueryString({
      "api_key": "fd54ccf1ef3a6b27f6f0f62a20a5cc96",
      "query": searchTerm,
      "language": "es-ES"
    });
    // console.log('query: ', query) ;
    var api = http.getUrl(config.get('apiSearch') + '/movie' + '?' + query) ;
    api = JSON.parse(api);
    return api['results']
  };

  this.getFilmDetails = function getFilmDetails(id) {
    var query = http.makeQueryString({
      "api_key": "fd54ccf1ef3a6b27f6f0f62a20a5cc96",
      "language": "es-ES"
    });
    var api = http.getUrl(config.get('apiFilm') + '/' + id + '?' + query);
    api = JSON.parse(api);
    return api;
  };

  this.getFeaturedPeople = function getFeaturedPeople(id) {
    var ftPeople = {}
    var query = http.makeQueryString({
      "api_key": "fd54ccf1ef3a6b27f6f0f62a20a5cc96",
    });
    var api = http.getUrl(config.get('apiFilm') + '/' + id + '/credits' + '?' + query);
    api = JSON.parse(api);
  
    // getting people
    for (var i=0; i < api['crew'].length; i++) {
      if (api['crew'][i]['job'] == 'Director') {
        ftPeople.director = api['crew'][i]['name']
        break
      }
    };

    ftPeople.ftCast = []
    for (var i=0; i < api['cast'].length; i++)  {
      if (api['cast'][i]['order'] <= 10) {
        ftPeople.ftCast.push(api['cast'][i]['name'])
      } else {
        break
      }
    }
    return ftPeople
  };

  this.getPerson = function getPerson(searchTerm) {
    var query = http.makeQueryString({
      "api_key": "fd54ccf1ef3a6b27f6f0f62a20a5cc96",
      "query": searchTerm,
      "language": "es-ES"
    });
    var api = http.getUrl(config.get('apiSearch') + '/person' + '?' + query);
    api = JSON.parse(api);
    return api['results'];
  };

  this.discoverMovie = function discoverMovie(query) {
    var api = http.getUrl(config.get('discover') + '/movie' + '?' + query);
    api = JSON.parse(api);
    return api['results']
  }
};

module.exports = {
  API: API
};