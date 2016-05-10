import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})
class Directorio {
  clientes = Array;

  constructor() {
    this.clientes = [
      {
        "_id" : "1",
        "identificacion" : {
          "nombre":"EneMedios",
          "razonsocial":"Javier Diaz Gaitan"
        },
        "clasificacion" : {
          "categoria" : "Publicidad",
          "giro" : "Publicidad local",
          "productos" : ["Producto 1","Producto 2","producto 3"]
        },
        "contacto" : {
          "telefonos":
          [
            {
            "tipo" : "celuluar",
            "numero" : "5538922314",
            "lada" : "55"
            },
          {
            "tipo" : "celuluar",
            "numero" : "5538922314",
            "lada" : "55"
            }
          ],
          "mails" : ["javodg@gmail.com","algomas@otracmpañia.com"]
        }
      }
    ];
  }
}

bootstrap(Directorio);
