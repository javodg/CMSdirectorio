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
				<ListaNegocios negocios={["Enemedios","02","03","04","05","06","07","08"]} />
			</div>
		)

	}
});

module.exports = Resultados;
