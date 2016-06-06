var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Link = ReactRouter.Link;

var History = ReactRouter.hashHistory

var Root = require('./components/Root.jsx');
var Directorio = require('./components/Dir.jsx');
var Index = require('./components/Index.jsx');
// TODO investigar como se quita la key del querry ""#/?_k=tfxwx1"
var Routes = (
  <Router history={History}>
    <Route component={Root}>
      <Route path="/" component={Index} />
      <Route path="/directorio" component={Directorio} />
    </Route>
  </Router>
);

module.exports = Routes;
