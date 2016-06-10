/**
 * NegocioController
 *
 * @description :: Server-side logic for managing negocios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 /*index: function (req, res) {
  sails.log("prueba de mensaje");
	var data = req.params.all();
  return res.send(data);
}*/
 todos: function (req, res) {
  Negocio.find().exec(function (err, negocios) {
   if (err) {
    res.send(400);
   } else {
    res.send(negocios);
    sails.log("algo debe aparecer aqui");
   }
  });
 },
 buscar: function (req, res) {
   var q = req.query.q;
  Negocio.find({ nombre : {  'contains' : q } }).exec(function (err, datos){
  if (err) {
    return res.negotiate(err);
  }
  //return res.attachment('../../chat.html');
  return res.json(datos);
});
 },
 nuevo: function (req, res) {
  var negocioJSON = {
   "nombre": "Torteria La hacienda",
   "razonsocial": "Dueño de Tortetria",
   "encargado": "Tortero",
   "categoria": ["El Menu"],
   "giro": ["Tortas"],
   "producto": ["Tortas", "Tacos", "Hamburgesas"],
   "contacto": {
    "telefono": [{
     "tipo": "celuluar",
     "numero": "5538922314",
     "lada": "55"
    }, {
     "tipo": "local",
     "numero": "59384426",
     "lada": "55"
    }],
    "mail": ["javodg@gmail.com", "algomas@otracmpañia.com"],
    "web": ["www.torteria.mx"],
    "social": [{
     "tipo": "facebook",
     "direccion": "https://www.facebook.com/javonox"
    }, {
     "tipo": "twitter",
     "direccion": "https://twitter.com/javonox"
    }]
   },
   "horarios": [{
    "dias": [1, 2, 3, 4, 5],
    "abre": "7",
    "cierra": "17"
   }, {
    "dias": [6],
    "abre": "8",
    "cierra": "20"
   }, {
    "dias": [7],
    "abre": "8",
    "cierra": "20"
   }],
   "local": [{
    "calle": "Violetas Mz 170 Lt 36 b",
    "colonia": "Ojo de Agua",
    "CP": "55770",
    "municipio": "Tecamac",
    "estado": "Mexico",
    "lon": 19.675484,
    "lat": -99.0240617
   }],
   "descripcion": {
    "corta": "Tortas, hamburgesas y tacos.",
    "larga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
   }
  };
  Negocio.create(negocioJSON).exec(function (err, datos) {
   sails.log('se agrego el negocio ' + datos.nombre);
  });
  res.send('se agrego el negocio ' + negocioJSON.nombre);
 }
};
