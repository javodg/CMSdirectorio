var React = require('react');

var data = {
    id: 1,
    identificacion: {
      nombre: "EneMedios",
      razonsocial: "Javier Diaz Gaitan",
      encargado: "Javier Diaz Gaitan"
    },
    clasificacion: {
      categoria: [ "Publicidad" ],
      giro: [ "Publicidad local" ],
      producto: [ "Producto 1", "Producto 2", "producto 3" ]
    },
    contacto: {
      telefono: [
        { tipo: "celuluar", numero: "5538922314", lada: "55" },
        { tipo: "local", numero: "59384426", lada: "55" } ],
      mail: [ "javodg@gmail.com", "algomas@otracmpañia.com" ],
      web: [ "www.enemedios.mx" ],
      social: [{
        tipo: "facebook",
        direccion: "https://www.facebook.com/javonox"
      },
      {
        tipo: "twitter",
        direccion: "https://twitter.com/javonox"
      }]
    },
    horarios: [
      {dias: [ 1, 2, 3, 4, 5 ], abre: "9", cierra: "16" },
      {dias: [ 6 ], abre: "9", cierra: "14" },
      {dias: [ 7 ], abre: false, cierra: false }
    ],
    local: [{
      calle: "Violetas Mz 170 Lt 36 b",
      colonia: "Ojo de Agua",
      CP: "55770",
      municipio: "Tecamac",
      estado: "Mexico",
      lon: 19.675484,
      lat: -99.0240617
    }],
    descripcion: {
      corta: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      larga: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
  };

var Negocio = React.createClass({
  render: function() {
    return (
      <div className="card-row">
       <div className="card-row-inner">
        <div className="card-row-image" data-background-image="assets/img/tmp/product-1.jpg">
         <div className="card-row-label"><a href="listing-detail.html">{data.clasificacion.categoria}</a></div>
         <div className="card-row-price">{data.clasificacion.producto[0]} / {data.clasificacion.producto[1]} / {data.clasificacion.producto[2]}</div>
        </div>
        <div className="card-row-body">
         <h2 className="card-row-title"><a href="listing-detail.html">{data.identificacion.nombre}</a></h2>
         <div className="card-row-content">
          <p>{data.descripcion.larga}</p>
         </div>
        </div>
        <div className="card-row-properties">
         <dl>
          <dd>Horarios</dd>
          <dt>
            Lunes a Viernes: {data.horarios[0].abre} a {data.horarios[0].cierra} <br />
          Sabados: {data.horarios[1].abre} a {data.horarios[1].cierra} <br />
          </dt>
          <dd>Categoria</dd><dt>{data.clasificacion.categoria}</dt>
          <dd>Rating</dd>
          <dt>
            <div className="card-row-rating">
                <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i>
            </div>
          </dt>
         </dl>
        </div>
       </div>
      </div>
    )
  }
});
/* var data = [ { identificacion: { nombre: "EneMedios", razonsocial: "Javier Diaz Gaitan", encargado: "Javier Diaz Gaitan" }, clasificacion: { categoria: [ "Publicidad" ], giro: [ "Publicidad local" ], producto: [ "Producto 1", "Producto
2", "producto 3" ] }, contacto: { "telefono": [ { tipo: "celuluar", numero: "5538922314", lada: "55" }, { tipo: "local", numero: "59384426", lada: "55" } ], mail: [ "javodg@gmail.com", "algomas@otracmpañia.com" ], web: [ "www.enemedios.mx"
], social: [ { tipo: "facebook", "direccion": "https://www.facebook.com/javonox" }, { "tipo": "twitter", "direccion": "https://twitter.com/javonox" } ] }, "horarios": [ { "dias": [ 1, 2, 3, 4, 5 ], "abre": "9", "cierra": "16" }, { "dias": [ 6 ], "abre":
"9", "cierra": "14" }, { "dias": [ 7 ], "abre": false, "cierra": false } ], "local": [ { "calle": "Violetas Mz 170 Lt 36 b", "colonia": "Ojo de Agua", "CP": "55770", "municipio": "Tecamac", "estado": "Mexico", "lon": 19.675484, "lat": -99.0240617 } ],
"descripcion": { "corta": "Lorem ipsum dolor sit amet consectetur adipisicing elit.", "larga": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
deserunt mollit anim id est laborum." }, "createdAt": "2016-05-11T23:38:00.767Z", "updatedAt": "2016-05-11T23:38:00.767Z", "id": "5733c258cd512d9020ad43d4" } ]; */



module.exports = Negocio;
