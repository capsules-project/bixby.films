var console = require('console') ;
var _count = require('./Count') ;

function FilmSum(api, quest) {
  var film = []
  for(var key in api) {
    film.push(api[key]) ;
  } ;
  // parseo un título en formato "Sonrisas y lágrimas (1965)"
  var titleYear = film[0] ;
  console.log('titleYear:', titleYear) ;
  var substring = _count.count(titleYear, '(') ;
  console.log('substring: ', substring) ;
  // solo hay un bloque de paréntesis
  if (substring == "1") {
    console.log('Solo hay una fecha') ;
    title = titleYear.split('(') ;
    year = title[1].split(')') ;
    this.year = year[0] ;
    console.log('year: ', year) ;
    title = title[0] ;
    this.title = title ;
    console.log('title: ', title) ;
  }
  // hay dos bloques de paréntesis
  else{
    console.log('hay más de una fecha')
    title = titleYear.split('(') ;
    year = title[title.length-1].split(')') ;
    this.year = year[0] ;
    console.log('year: ', year) ;
    title = title[0] ;
    this.title = title ;
    console.log('title: ', title) ;
  }
  // de la film vuelven resultados que no tienen la id extraída de la URL, aquí spliteo la url y me quedo con el id 
  var id = film[1]
  if (id.split('/').length > 1) {
      console.log('True split: ', id) ;
      id = id.split('/');
      id = id[id.length - 1] ; 
      id = id.split('film') ;
      id = id[id.length - 1] ; 
      this.id = id ;
      console.log('Id split: ', id)
    }
  else {
    this.id = id
    console.log('Id split: ', id) ;
  }
  if (quest != undefined) { 
      this.quest = quest
  } ;
}

module.exports = {
  function: FilmSum,
  FilmSum : FilmSum
};
