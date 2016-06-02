var React = require('react');
var Negocio = require('./Negocio.jsx');

var ListaNegocios = React.createClass({
	render: function() {
		var crearNegocio = function(nombre, id) {
			return <Negocio key={ id + nombre } nombre={ nombre } />
		};
		return (
			<div>

				{this.props.negocios.map(crearNegocio)}
			</div>
		)
	}
});

module.exports = ListaNegocios;
