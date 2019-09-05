var config = require('config') ;
var http = require('http') ;
var _api = require('./lib/API') ;
var _film = require('./lib/FilmSum') ;
var console = require('console') ;

function searchFilm(searchTerm, quest, $vivContext) {
    console.log('searchTerm: ', searchTerm) ;
    var films = [] ;
    var api = new _api.API();
    var filmsList = api.getFilms(searchTerm) ;
    console.log('searchFil, filmList: ', filmsList)
    for (var i=0 ; i < filmsList.length ; i++) {
      var film = new _film.FilmSum(filmsList[i], quest) ;
      console.log('first film Parse, id: ',film.id) ;
      console.log('first film Parse, id: ',film.title) ;
      console.log('first film Parse, id: ',film.year) ;
      films.push(film)
    }
    console.log('final, first films: ', films) ;
    return films
  } ;

module.exports = {
  function: searchFilm,
  searchFilm: searchFilm
};
