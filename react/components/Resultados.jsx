var React = require('react');
var ListaNegocios = require('./ListaNegocios.jsx');

var Resultados = React.createClass({
	getInitialState: function() {
		return { negocios: [], nuevoNegocio: '' }
	},
	handleSubmit: function(e) {
		e.preventDefault();
		var Negociosactuales = this.state.items;
		Negociosactuales.push(this.state.nuevoNegocio);
	},
	render: function() {
		return (
			<div>
				Resultados de busqueda
				<ListaNegocios negocios={["Enemedios","01"]} />
			</div>
		)

	}
});

module.exports = Resultados;
