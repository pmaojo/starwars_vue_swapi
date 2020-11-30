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

  getNextPage(model, nextavailable) {
    return axios
      .get('https://swapi.dev/api/' + model + '/?page=' + nextavailable)
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
      .then( response => {return response.data})
      .finally(
      window.scrollTo(0, 0)
    )
  }
}
