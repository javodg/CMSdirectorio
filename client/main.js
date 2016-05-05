import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '/imports/css/bootstrap.css';
import '/imports/css/general.css';

import '/imports/js/bootstrap.js';

import App from '../imports/ui/App.jsx';
//import Directorio from '../imports/ui/App.jsx';
import Navbar from '../imports/ui/Navbar.jsx';


Meteor.startup(() => {
  render(<Navbar />, document.getElementById('navbar'));
  render(<App />, document.getElementById('render-target'));
  //render(<Directorio />, document.getElementById('directorio'));
});
