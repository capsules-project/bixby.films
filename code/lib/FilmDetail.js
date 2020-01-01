var console = require('console') ;
var _api = require('./API')

function FilmDetail(film, $vivContext) {
  this.id = film['id'];
  this.year = film['release_date'] ;

  // get featured people
  var api = new _api.API();
  var ftPeople = api.getFeaturedPeople(this.id);
  this.director = ftPeople.director ;
  this.cast = ftPeople.ftCast.join(', ');

  this.synopsis = film['overview'] ;
  if (film['imdb_id'] && film['imdb_id'] != undefined && film['imdb_id'] != "") {
    this.imdbID = film['imdb_id'];
    // accessing $vivContext to get the device
    var device = $vivContext.device ;
    // console.log('device: ', device) ;
    if (device == 'bixby-mobile') {
      this.url = 'https://m.imdb.com/title/' + this.imdbID
    } else {
      this.url = 'https://www.imdb.com/title/' + this.imdbID
    }
  }
}

  module.exports = {
    FilmDetail : FilmDetail
};