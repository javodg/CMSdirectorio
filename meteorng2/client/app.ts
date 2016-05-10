import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, NgZone } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { Negocios } from '../collections/negocios';
import { Tracker } from 'meteor/tracker';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Directorio {
  clientes: Array<Object>;

  constructor (zone: NgZone) {
    Tracker.autorun(() => zone.run(() => {
      this.clientes = Negocios.find().fetch();
    }));
  }
}
    /*[
      {
       "_id": "1",
       "identificacion": {
        "nombre": "EneMedios",
        "razonsocial": "Javier Diaz Gaitan",
        "encargado": "Javier Diaz Gaitan"
       },
       "clasificacion": {
        "categoria": ["Publicidad"],
        "giro": ["Publicidad local"],
        "producto": ["Producto 1", "Producto 2", "producto 3"]
       },
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
        "web": ["www.enemedios.mx"],
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
        "abre": "9",
        "cierra": "16"
       }, {
        "dias": [6],
        "abre": "9",
        "cierra": "14"
       }, {
        "dias": [7],
        "abre": false,
        "cierra": false
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
        "corta": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "larga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       }
     },
     {
      "_id": "1",
      "identificacion": {
       "nombre": "EneMedios",
       "razonsocial": "Javier Diaz Gaitan",
       "encargado": "Javier Diaz Gaitan"
      },
      "clasificacion": {
       "categoria": ["Publicidad"],
       "giro": ["Publicidad local"],
       "producto": ["Producto 1", "Producto 2", "producto 3"]
      },
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
       "web": ["www.enemedios.mx"],
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
       "abre": "9",
       "cierra": "16"
      }, {
       "dias": [6],
       "abre": "9",
       "cierra": "14"
      }, {
       "dias": [7],
       "abre": false,
       "cierra": false
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
       "corta": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
       "larga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }
    }
  ]*/

bootstrap(Directorio);
