/**
 * NegocioController
 *
 * @description :: Server-side logic for managing negocios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
 index: function (req, res) {
  sails.log("prueba de mensaje");
	var data = req.params.all();
  return res.send(data);
 }
};
