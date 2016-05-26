var React = require('react');

var data = [
  { id: 1, identificacion: { nombre: "EneMedios", razonsocial: "Javier Diaz Gaitan", encargado: "Javier Diaz Gaitan" } }
];

var Negocio = React.createClass({
  render: function() {
    return (
      <div className="card-row">
       <div className="card-row-inner">
        <div className="card-row-image" data-background-image="assets/img/tmp/product-1.jpg">
         <div className="card-row-label"><a href="listing-detail.html">Vacation</a></div>
         <div className="card-row-price">$100 / night</div>
        </div>
        <div className="card-row-body">
         <h2 className="card-row-title"><a href="listing-detail.html">{this.props.nombre}</a></h2>
         <div className="card-row-content">
          <p>And why did 'I' have to take a cab? Bender, quit destroying the universe! I've been there. My folks were always on me to groom myself and...</p>
         </div>
        </div>
        <div className="card-row-properties">
         <dl>
          <dd>Price</dd><dt>$100 / night</dt>
          <dd>Category</dd><dt>Vacation</dt>
          <dd>Location</dd><dt>New York / Village</dt>
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
module.exports = Negocio;
