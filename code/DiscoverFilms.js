var config = require('config')
var http = require('http')
var _api = require('./lib/API')
var _genreTrans = require('./lib/GenreTrans')
var _film = require('./lib/FilmSum')

function discoverFilms (genre) {
  var api = new _api.API()
  var query = {
    "api_key": config.get('apiKey'),
    "language": "es-ES",
    "sort_by": "popularity.desc"
  }

  if (genre != undefined) {
    var genreID = _genreTrans.genreTrans(genre)
    query['with_genres'] = genreID
  }
  query = http.makeQueryString(query)
  api = api.discoverMovie(query)
  
  var films = []
  for (var i=0; i<api.length; i++) {
    var film = new _film.FilmSum(api[i])
    films.push(film)
  }
  return films
}
module.exports = {
  function: discoverFilms,
  discoverFilms: discoverFilms
}