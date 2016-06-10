var React = require('react');
var ListaNegocios = require('./ListaNegocios.jsx');
var NegociosAPI = require('../services/negociosapi');

var d = '';

var Resultados = React.createClass({
	getInitialState: function() {
		return { negocios: [] }
	},
	componentWillMount: function() {
		NegociosAPI.buscar('EneMedios')
		.then(function(data) {
			this.setState({ negocios : data });
			d = data;
			console.log(d[0].nombre);
		}.bind(this));
	},
	render: function() {
		return (
			<div>

				<ListaNegocios />
			</div>
		)

	}
});

module.exports = Resultados;
