//var fetch = require('whatwg-fetch');
//TODO investigar por que funciona asi

var baseURL = 'http://localhost:8080/negocio/buscar?q=';

var NegociosAPI = {
  buscar: function(q) {
    console.log(baseURL + q);
    return fetch(baseURL + q)
    .then(function(res){
      //var respond = res.json();
      //console.log(respond);
      return res.json();
    });
  }/*,
  put: function(url) {
    console.log('Pendiente')
  },
  // TODO hacer las funciones del resto del CRUD para NegociosAPI
  delete: function(url) {
    console.log('Pendiente')
  },
  update: function(url) {
    console.log('Pendiente')
  }*/
};

module.exports = NegociosAPI;
