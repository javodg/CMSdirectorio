'use strict';

const path = require('path');
const NeDB = require('nedb');
const service = require('feathers-nedb');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const db = new NeDB({
    filename: path.join(app.get('nedb'), 'clientes.db'),
    autoload: true
  });

  let options = {
    Model: db,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/clientes', service(options));

  // Get our initialize service to that we can bind hooks
  const clienteService = app.service('/clientes');

  // Set up our before hooks
  clienteService.before(hooks.before);

  // Set up our after hooks
  clienteService.after(hooks.after);
};
