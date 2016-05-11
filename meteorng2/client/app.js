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
            _this.negocios = negocios_1.Negocios.find().fetch();
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
browser_1.bootstrap(Directorio);
//# sourceMappingURL=app.js.map