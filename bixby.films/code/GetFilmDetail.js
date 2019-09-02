var config = require('config') ;
var http = require('http') ;
var _api = require('./lib/API') ;
var _filmDetail = require('./lib/FilmDetail');
var console = require('console') ;

function getFilmDetail(film, $vivContext) {
  console.log('getFilmDetail, id: ',film.id) ;
  var api = new _api.API();
  var filmInfo = api.getFilmDetails(film.id);
  var parser = new _filmDetail.FilmDetail(film.id, filmInfo, $vivContext) ;
  console.log('getFilmDetail, parsedFilm: ', parser)
  return parser
} ;

module.exports = {
  function: getFilmDetail,
  getFilmDetail: getFilmDetail
}
