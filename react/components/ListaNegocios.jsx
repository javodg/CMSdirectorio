var React = require('react');
var Negocio = require('./Negocio.jsx');
var NegociosAPI = require('../services/negociosapi');

var d = '';

var ListaNegocios = React.createClass({
	getInitialState: function() {
		return { negocios: [] }
	},
	componentWillMount: function() {
		NegociosAPI.buscar('')
		.then(function(data) {
			this.setState({ negocios : data });
			d = data;
			console.log(d[0].nombre);
		}.bind(this));
	},
	render: function() {
		var enlistarNegocios = this.state.negocios.map(function(item) {
			return <Negocio
				key={ item.nombre }
				datos= { item } />
		})
		return (
			<div>
				{ enlistarNegocios }
			</div>
		)
	}
});

module.exports = ListaNegocios;
