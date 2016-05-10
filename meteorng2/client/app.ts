import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component, NgZone } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { Negocios } from '../collections/negocios'
import { Tracker } from 'meteor/tracker';

@Component({
 selector: 'app',
 templateUrl: 'client/app.html'
})
class Directorio {
 clientes: Array<Object>;

 constructor(zone: NgZone) {
  Tracker.autorun(() => zone.run(() => {
   this.clientes = Negocios.find().fetch();
  }));
 }
}

bootstrap(Directorio);
