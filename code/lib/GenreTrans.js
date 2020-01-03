var http = require('http')
var config = require('config')

function genreTrans(genre) {
  var query = http.makeQueryString({
    "api_key": config.get('apiKey')
  })
  avGenres = http.getUrl('https://api.themoviedb.org/3/genre/movie/list' + '?' + query)
  avGenres = JSON.parse(avGenres)

  for (var i=0; i<avGenres['genres'].length; i++) {
    if (genre == avGenres['genres'][i]["name"].toLowerCase()) {
      return avGenres['genres'][i]["id"]
      break
    }
  }
}

module.exports = {
  function: genreTrans,
  genreTrans: genreTrans
}