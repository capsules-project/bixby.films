var config = require('config') ;
var http = require('http') ;
var fail = require('fail') ;
var _film = require('./lib/Film');
var console = require('console') ;

function getFilmDetail(id, $vivContext) {
  console.log('getFilmDetail, id: ',id) ;
  var film = http.getUrl(config.get('apiFilm') + '/' + id, null, null);
  console.log('getFilmDetail, film: ', film) ;
  film = JSON.parse(film) ;
  parsedFilm = new _film.Film(film, id, $vivContext) ;
  console.log('getFilmDetail, parsedFilm: ', parsedFilm)
  return parsedFilm
} ;

module.exports = {
  function: getFilmDetail,
  getFilmDetail: getFilmDetail
}
