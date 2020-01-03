var _api = require('./lib/API')
var _person = require('./lib/Person')

function disambiguatePerson(searchTerm) {
  var person = []
  var api = new _api.API()
  api = api.getPerson(searchTerm)
  for (var i=0; i<api.length; i++) {
    if (api[i]['known_for_department'] == 'Directing' || api[i]['known_for_department'] == 'Acting' || api[i]['known_for_department'] == 'Production') {
      personInstance = new _person.Person(api[i])
      if (personInstance.pruning == undefined) {
        person.push(personInstance)
      }
    }
  }
  return person
}

module.exports = {
  function: disambiguatePerson,
  disambiguatePerson: disambiguatePerson
}