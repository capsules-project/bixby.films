var _api = require('./API')
var film = require('./FilmSum')

function Person(person) {
  this.id = person['id'];
  this.name = person['name'];

  // translate job
  if (person['known_for_department'] == 'Directing') {
    this.job = 'Director'
  } else if (person['known_for_department'] == 'Acting') {
    this.job = 'Actor'
  } else if (person['known_for_department'] == 'Production') {
    this.job = 'Productor'
  };

  // fetching image
  if (person['profile_path']) {
    var api = new _api.API()
    var apiConfig = api.getConfig()
    this.image = apiConfig['images']['secure_base_url'] + apiConfig['images']['poster_sizes'][0] + person['profile_path']
  
  }
  
  // processing ftFilms
  ftFilms = []
  for (var i=0; i<person['known_for'].length; i++){
    if (person['known_for'][i]['media_type'] == 'movie') {
      var film_instance = new film.FilmSum(person['known_for'][i])
      ftFilms.push(film_instance.title)
    }
  }
  this.ftFilms = ftFilms
  
  // pruning person if no films
  if (this.ftFilms.length < 1) {
    this.pruning = true
  }
}

module.exports = {
  function: Person,
  Person : Person
};