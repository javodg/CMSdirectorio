var React = require('react');
var Listado = require('./Listado.jsx');

var Resultados = React.createClass({
  getInitialState: function() {
    return {
      
    }
  };
 render: function() {
  return (
   <div className="fullscreen-wrapper">
    <div className="fullscreen-scroll">
     <div className="fullscreen-scroll-inner">
      <div className="fullscreen-scroll-padding">
       <form className="filter" method="post" action="?">
        <div className="row">
         <div className="col-sm-12 col-md-4">
          <div className="form-group">
           <input type="text" placeholder="Producto o Servicio" className="form-control"/>
          </div>
         </div>
         <div className="col-sm-12 col-md-4">
          <div className="form-group">
           <select className="form-control" title="Localidad">
            <option>Ojo de Agua</option>
            <option>Tecamac</option>
            <option>Ecatepec</option>
            <option>Coacalco</option>
            <option>Todos</option>
           </select>
          </div>
         </div>
         <div className="col-sm-12 col-md-4">
          <div className="form-group">
           <select className="form-control" title="Categoria">
            <option value>A la carta</option>
            <option value>Todo para tu evento</option>
            <option value>Todo para estar sano y en forma</option>
            <option value>Ocio y entretenimiento</option>
            <option value>Todo para tu mascota</option>
            <option value>Todo para tu vehiculo</option>
            <option value>Todo para tu inmueble</option>
            <option value>Todo para aprender</option>
            <option value>Todo para cocinar</option>
            <option value>Todo para tus peques</option>
            <option value>Especialistas y profecionales</option>
            <option value>Turismo regional</option>
           </select>
          </div>
         </div>
        </div>
        <hr/>
        <div className="row">
         <div className="col-sm-8">
          <div className="filter-actions">
           <a href="#"><i className="fa fa-close"/>
            Reiniciar campos</a>
          </div>
         </div>
         <div className="col-sm-4">
          <button type="submit" className="btn btn-primary">Buscar</button>
         </div>
        </div>
       </form>
       <div id="Listado"></div>
      </div>
     </div>
    </div>
    <div id="fullscreen-map" data-transparent-marker-image="assets/img/transparent-marker-image.png" className="fullscreen-map"></div>
   </div>
  )
 }
})

module.exports = Resultados;
