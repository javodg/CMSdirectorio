var React = require('react');
var Resultados = require('./Resultados.jsx');

var Directorio = React.createClass({
  render: function() {
    return (
      <div className="main-inner">
        <div className="container">
          <div className="row">
            <div className="document-title">
              <h1>Resultados de Busqueda</h1>
              <ul className="breadcrumb">
                <li><a href="#">Comida</a>
                </li>
                <li><a href="#">Elotes y esquites</a>
                </li>
              </ul>
            </div>
            {/* /.document-title */}
            <div className="col-sm-8 col-lg-9">
              <div className="content">
                <form className="filter" method="post" action="?">
                  <div className="row">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Buscar por negocio, producto o servicio" />
                        {/* TODO Investigar el autollenado de la caja de busqueda */}
                        <span className="input-group-btn">
                          <button className="btn btn-primary" type="button">Buscar</button>
                          {/* TODO implementar funcion de busqueda en el backend */}
                        </span>
                      </div>
                      {/* /.input-group */}
                    {/* /.col-* */}
                  </div>
                  {/* /.row */}
                </form>
                <div className="page-title">
                  <h2 style={{display: 'inline'}}>16 Negocios que venden Elotes</h2>
                </div>
                {/* /.page-title */}
                <div className="cards-row">
                  <Resultados />
                </div>
                {/* /.cards-simple-wrapper */}
                <div className="pager">
                  <ul>
                    <li><a href="#">Prev</a></li>
                    <li><a href="#">1</a></li>
                    <li className="active"><a>2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">6</a></li>
                    <li><a href="#">Sig</a>
                    </li>
                  </ul>
                </div>
                {/* /.pagination */}
              </div>
              {/* /.content */}
            </div>
            {/* /.col-* */}
            <div className="col-sm-4 col-lg-3">
              <div className="sidebar">
                <div className="widget">
                  <h2 className="widgettitle">Mapa</h2>
                  <div className="cards-small">
                    <div className="card-small">
                      <img width="500" src="http://maps.googleapis.com/maps/api/staticmap?center=Ojo+de+agua&zoom=15&scale=1&size=300x500&maptype=roadmap&format=png&visual_refresh=true" alt="Google Map of Ojo de agua" className="img-responsive" />
                      {/* /.card-small-content */}
                    </div>
                    {/* /.card-small */}
                  </div>
                  {/* /.cards-small */}
                </div>
                {/* /.widget */}
                <div className="widget">
                  <h2 className="widgettitle">Filter</h2>
                  <div className="background-white p20">
                    <form method="post" action="?">
                      <div className="form-group">
                        <label htmlFor>Keyword</label>
                        <input type="text" className="form-control" name id />
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label htmlFor>Category</label>
                        <select className="form-control" title="Select Category">
                          <option>Automotive</option>
                          <option>Real Estate</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label htmlFor>Location</label>
                        <select className="form-control" title="Select Location">
                          <option>New York</option>
                          <option>San Francisco</option>
                        </select>
                      </div>
                      {/* /.form-group */}
                      <div className="form-group">
                        <label htmlFor>Starting Price</label>
                        <input type="text" className="form-control" name id />
                      </div>
                      {/* /.form-group */}
                      <button className="btn btn-primary btn-block" type="submit">Search</button>
                    </form>
                  </div>
                </div>
                {/* /.widget */}
                <div className="widget">
                  <h2 className="widgettitle">Categorias</h2>
                  <ul className="menu">
                    <li><a href="#">El Menu</a>
                    </li>
                    <li><a href="#">Automoviles</a>
                    </li>
                    <li><a href="#">Reparacion</a>
                    </li>
                    <li><a href="#">Escuelas</a>
                    </li>
                  </ul>
                  {/* /.menu */}
                </div>
                {/* /.wifget */}
              </div>
              {/* /.sidebar */}
            </div>
            {/* /.col-* */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
    );
  }
});

module.exports = Directorio;
