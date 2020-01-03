var console = require('console') ;
var _api = require('./API')

function FilmDetail(film, $vivContext) {
  // get featured people
  var api = new _api.API();
  var ftPeople = api.getCredits(film['id']);

  // getting people
  for (var i=0; i < ftPeople['crew'].length; i++) {
    if (ftPeople['crew'][i]['job'] == 'Director') {
      this.director = ftPeople['crew'][i]['name']
      break
    }
  };

  cast = []
  for (var i=0; i < ftPeople['cast'].length; i++)  {
    if (ftPeople['cast'][i]['order'] <= 10) {
      cast.push(ftPeople['cast'][i]['name'])
    } else {
      break
    }
  }
  this.cast = cast.join(', ');

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