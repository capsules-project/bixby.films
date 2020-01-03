var config = require('config')
var http = require('http')
var _api = require('./lib/API')
var _genreTrans = require('./lib/GenreTrans')
var _film = require('./lib/FilmSum')

function discoverFilms (searchTerm, person, genre) {
  var api = new _api.API()
  var query = {
    "api_key": config.get('apiKey'),
    "language": "es-ES",
    "sort_by": "popularity.desc"
  }

  /////////
  if (person != undefined) {
    query['with_people'] = person.id
  }

  ////////
  if (genre != undefined) {
    var genreID = _genreTrans.genreTrans(genre)
    query['with_genres'] = genreID
  }

  f_query = http.makeQueryString(query)
  api_response = api.discoverMovie(f_query)
  api_results = api_response['results']
  
  if (person != undefined) {
    for (var j=2; j<=api_response['total_pages']; j++) {
      if (api_results.length<20) {
        query['page'] = j
        f_query = http.makeQueryString(query)
        api_results += api.discoverMovie(f_query)['results']
      } else {
        break
      }
    }
  }

  var films = []
  for (var i=0; i<api_results.length; i++) {
    // if (person != undefined && api_results[i]['id']) {
    //   var credits = api.getCredits(api_results[i]['id'])
    //   for (var i=0; i < credits['crew'].length; i++) {
    //     if (credits['crew'][i]['name'] == person.name && (credits['crew'][i]['department'] == 'Directing' || credits['crew'][i]['department'] == 'Production')) {
    //       var film = new _film.FilmSum(api_results[i])
    //       films.push(film)
    //       break
    //     }
    //   };
    //   for (var i=0; i<credits['cast'].length; i++) {
    //     if (credits['cast'][i]['name'] == person.name) {
    //       var film = new _film.FilmSum(api_results[i])
    //       films.push(film)
    //       break
    //     }
    //   };
    // } else {
      var film = new _film.FilmSum(api_results[i])
      films.push(film)
    // }
  }
  return films
}
module.exports = {
  function: discoverFilms,
  discoverFilms: discoverFilms
}