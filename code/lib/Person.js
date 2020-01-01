var _api = require('./API')
var film = require('./FilmSum')

function Person(person) {
  this.name = person['name'];
  this.job = person['known_for_department'];

  // fetching image
  var api = new _api.API()
  var apiConfig = api.getConfig()
  this.image = apiConfig['images']['secure_base_url'] + apiConfig['images']['poster_sizes'][0] + person['profile_path']
  
  // processing ftFilms
  ftFilms = []
  for (var i=0; i<person['known_for'].length; i++){
    var film_instance = new film.FilmSum(person['known_for'][i])
    ftFilms.push(film_instance)
  }
  this.ftFilms = ftFilms
}

module.exports = {
  function: Person,
  Person : Person
};