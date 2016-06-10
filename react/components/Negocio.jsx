var React = require('react');

var Negocio = React.createClass({
  render: function() {
    return (
      <div className="card-row">
       <div className="card-row-inner">
        <div className="card-row-image" data-background-image="assets/img/tmp/product-1.jpg">
         <div className="card-row-label"><a href="listing-detail.html">{this.props.datos.categoria}</a></div>
         <div className="card-row-price">{this.props.datos.producto[0]} / {this.props.datos.producto[1]} / {this.props.datos.producto[2]}</div>
        </div>
        <div className="card-row-body">
         <h2 className="card-row-title"><a href="listing-detail.html">{this.props.datos.nombre}</a></h2>
         <div className="card-row-content">
          <p>{this.props.datos.descripcion.corta}</p>
         </div>
        </div>
        <div className="card-row-properties">
         <dl>
          <dd>Horarios</dd>
          <dt>
            L a V: {this.props.datos.horarios[0].abre} a {this.props.datos.horarios[0].cierra} <br />
            S y D: {this.props.datos.horarios[1].abre} a {this.props.datos.horarios[1].cierra} <br />
          </dt>
          <dd>Categoria</dd><dt>{this.props.datos.categoria}</dt>
          <dd>Rating</dd>
          <dt>
            <div className="card-row-rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
          </dt>
         </dl>
        </div>
       </div>
      </div>
    )
  }
});

module.exports = Negocio;
