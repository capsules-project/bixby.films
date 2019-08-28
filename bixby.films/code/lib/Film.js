module.exports.function = function Film(title, year, id, director, cast, synopsis) {
  this.title = title ;
  this.year = title.split(' (')[1].split(')')[0] ;
  this.id = id ;
  this.director = director ;
  this.cast = cast ;
  this.synopsis = synopsis ;
}