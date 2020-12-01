import axios from 'axios'

export default class SwApi {
    
  getFirstList(model) {
    return axios
      .get('https://swapi.dev/api/' + model + '/')
      .then(response => {
        return response.data.results
      })
      .catch(e => (console.log('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))
  }

  getNextPage(model, nextIDavailable) {
    return axios
      .get('https://swapi.dev/api/' + model + '/?page=' + nextIDavailable)
      .then(response => {return response.data})
      .catch(e => (console.log('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))

  }

  getTotal(model) {
    return axios
      .get('https://swapi.dev/api/' + model)
      .then(response => {return response.data.count})
      .catch(e => (console.log('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))

  }

  getDetails(model, ident) {
    return axios
      .get('https://swapi.dev/api/'+model+'/'+ident)
      .then(window.scrollTo(0, 0))
      .then( response => {return response.data})
      .catch(e => (console.log('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))

  }
  getRelated(model, parent, ident) {
    return axios
      .get('https://swapi.dev/api/'+parent+'/'+ident)
      .then( response => {return (model === 'starships') ? response.data.spaceships : response.data.films})
      .catch(e => (console.log('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))

  }
  async getNames(urls) {
    const names = []
    for(let i = 0; i < urls.length; i++){ 
      axios
        .get(urls[i])
        .then( response => {names.push(urls[i]+'='+(response.data['title'] || response.data['name']))})
        .catch(e => (console.log('Api error! - Hola Api. Hola, Blas. 👉🏻 ' + e)))
    }
    return (names)}
}
