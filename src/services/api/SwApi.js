import axios from 'axios'

export default class SwApi {
    
  getFirstList(model) {
    return axios
      .get('https://swapi.dev/api/' + model + '/')
      .then(response => {
        return response.data.results
      })
      .catch(e => (alert('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))
  }

  getNextPage(model, nextIDavailable) {
    return axios
      .get('https://swapi.dev/api/' + model + '/?page=' + nextIDavailable)
      .then(response => {return response.data})
  }

  getTotal(model) {
    return axios
      .get('https://swapi.dev/api/' + model)
      .then(response => {return response.data.count})
  }

  getDetails(model, ident) {
    return axios
      .get('https://swapi.dev/api/'+model+'/'+ident)
      .then(window.scrollTo(0, 0))
      .then( response => {return response.data})
      .finally(
    )
  }
  getRelated(model, parent, ident) {
    return axios
      .get('https://swapi.dev/api/'+parent+'/'+ident)
      .then( response => {return (model === 'starships') ? response.data.spaceships : response.data.films})
      .finally(
    )
  }
  async getNames(urls) {
    const names = []
    for(let i = 0; i < urls.length; i++){ 
      axios
        .get(urls[i])
        .then( response => {names.push(urls[i]+'='+(response.data['title'] || response.data['name']))})
    }
    return (names)}
}
