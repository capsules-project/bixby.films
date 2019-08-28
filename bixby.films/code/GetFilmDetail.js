var config = require('config') ;
var http = require('http') ;
var _film = require('./lib/Film');
var console = require('console') ;

function getFilmDetail(id) {
  var film = http.getUrl(config.get('apiFilm') + '/' + id, null, null);

  film = JSON.parse(film)
  parsedFilm = new _film.Film(film)
  return film
}