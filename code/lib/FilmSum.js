var console = require('console') ;
var _api = require('./API') ;

function FilmSum(film, quest) {
  this.year = film['release_date'].split('-')[0] ;
  // console.log('year: ', this.year) ;
  
  this.title = film['title'] ;
  // console.log('title: ', this.title) ;

  this.id = film['id'] ;
  // console.log('Id: ', this.id)
  
  if (quest != undefined) { 
    this.quest = quest
  };
  
  // imagen
  var api = new _api.API()
  var apiConfig = api.getConfig()
  this.image = apiConfig['images']['secure_base_url'] + apiConfig['images']['poster_sizes'][0] + film['poster_path']
};

module.exports = {
  function: FilmSum,
  FilmSum : FilmSum
};
