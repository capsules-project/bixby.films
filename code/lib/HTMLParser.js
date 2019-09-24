var console = require('console') ;
var http = require('http') ;

function htmlParser(id) {
  var html = http.getUrl('https://www.filmaffinity.com/es/film' + id + '.html') ;
  var image = html.split("movie-main-image-container")[1].split('<img itemprop')[1].split('src="')[1].split('"alt')[0]
  // console.log(image)
  return image
}

module.exports = {
  htmlParser: htmlParser
};