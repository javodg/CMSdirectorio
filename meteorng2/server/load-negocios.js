"use strict";
var negocios_ts_1 = require('../collections/negocios.ts');
function loadNegocios() {
    if (negocios_ts_1.Negocios.find().count() === 0) {
        var negocios = [
            {
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
        ];
        for (var i = 0; i < negocios.length; i++) {
            negocios_ts_1.Negocios.insert(negocios[i]);
        }
    }
}
exports.loadNegocios = loadNegocios;
;
//# sourceMappingURL=load-negocios.js.map