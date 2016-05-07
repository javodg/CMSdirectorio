'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('cliente service', function() {
  it('registered the clientes service', () => {
    assert.ok(app.service('clientes'));
  });
});
