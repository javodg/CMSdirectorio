"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('reflect-metadata');
require('zone.js/dist/zone');
var core_1 = require('angular2/core');
var browser_1 = require('angular2/platform/browser');
var negocios_1 = require('../collections/negocios');
var tracker_1 = require('meteor/tracker');
var Directorio = (function () {
    function Directorio(zone) {
        var _this = this;
        tracker_1.Tracker.autorun(function () { return zone.run(function () {
            _this.clientes = negocios_1.Negocios.find().fetch();
        }); });
    }
    Directorio = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: 'client/app.html'
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], Directorio);
    return Directorio;
}());
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
browser_1.bootstrap(Directorio);
//# sourceMappingURL=app.js.map