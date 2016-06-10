var React = require('react');
var Resultados = require('./ListaNegocios.jsx');

var Mainpage = React.createClass({
  render: function() {
    return (
      <div className="page-wrapper" >
        <header className="header">
          <div className="header-wrapper">
            <div className="container">
              <div className="header-inner">
                <div className="header-logo">
                  <a href="index.html">
                    <img src="assets/img/logo.png" alt="Logo" width="70 px" height="65px" />
                    {/* TODO Cambiar el logo de la compañia */}
                  </a>
                </div>
                {/* /.header-logo */}
                <div className="header-content">
                  <div className="header-bottom">
                    <div className="header-action">
                      <a href="/nuevonegocio/" className="header-action-inner" title="Agregar Nuevo Negocio" data-toggle="tooltip" data-placement="bottom">
                        <i className="fa fa-plus" />
                      </a>
                      {/* /.header-action-inner */}
                    </div>
                    {/* /.header-action */}
                    <ul className="header-nav-primary nav nav-pills collapse navbar-collapse">
                      <li className="active">
                        <a href="#">Inicio</a>
                      </li>
                      <li>
                        <a href="directorio.html">Directorio</a>
                      </li>
                      <li className="has-mega-menu ">
                        <a href="#">EneMedios <i className="fa fa-chevron-down" /></a>
                        <ul className="mega-menu">
                          <li>
                            <a href="#">Quienes Somos</a>
                            <ul>
                              <li><a href="#">Staff</a></li>
                              <li><a href="#">Historia</a></li>
                              <li><a href="#">ADN</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Que Hacemos</a>
                            <ul>
                              <li><a href="#">Medios Impresos</a></li>
                              <li><a href="#">Medios Electronicos</a></li>
                              <li><a href="#">Enseñanza</a></li>
                              <li><a href="#">Otros</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Como lo Hacemos</a>
                            <ul>
                              <li><a href="#">Lorem ipsum</a></li>
                              <li><a href="#">Lorem ipsum</a></li>
                              <li><a href="#">Lorem ipsum</a></li>
                              <li><a href="#">Lorem ipsum</a></li>
                              <li><a href="#">Lorem ipsum</a></li>
                            </ul>
                          </li>
                          <li className="hidden-xs">
                            <div className="special">
                              <a href="register.html">Unete a <br />Nosotros</a>
                            </div>
                            {/* /.special*/}
                          </li>
                        </ul>
                      </li>
                      <li><a href="login.html">Ingresar</a></li>
                      <li><a href="signup.html">Inscribirte</a></li>
                      <li><a href="contacto/">Contacto </a></li>
                    </ul>
                    <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".header-nav-primary">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                  {/* /.header-bottom */}
                </div>
                {/* /.header-content */}
              </div>
              {/* /.header-inner */}
            </div>
            {/* /.container */}
          </div>
          {/* /.header-wrapper */}
        </header>
        {/* /.header */}
        <div className="main">
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
          {/* /.main-inner */}
        </div>
        {/* /.main */}
        <footer className="footer">
                <div className="footer-top">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4">
                        <h2>Acerca de EneMedios</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                      </div>
                      {/* /.col-* */}
                      <div className="col-sm-4">
                        <h2>Informacion de Contacto</h2>
                        <p>
                          Abrevadero Mz 79 Lt 15, Ojo de Agua,
                          <br /> Tecamac, Estado de Mexico, Mexico.
                          <br /> Tel: (55)593-8-77-42, <a href="#">javodg</a>
                        </p>
                      </div>
                      {/* /.col-* */}
                      <div className="col-sm-4">
                        <h2>Mantente Conectado</h2>
                        <ul className="social-links nav nav-pills">
                          <li><a href="#"><i className="fa fa-twitter" /></a></li>
                          <li><a href="#"><i className="fa fa-facebook" /></a></li>
                          <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                          <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                          <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                          <li><a href="#"><i className="fa fa-instagram" /></a></li>
                          <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                        </ul>
                        {/* /.header-nav-social */}
                      </div>
                      {/* /.col-* */}
                    </div>
                    {/* /.row */}
                  </div>
                  {/* /.container */}
                </div>
                {/* /.footer-top */}
                <div className="footer-bottom">
                  <div className="container">
                    <div className="footer-bottom-left">
                      © 2016 Todos los derechos reservados.
                    </div>
                    {/* /.footer-bottom-left */}
                    <div className="footer-bottom-right">
                      <ul className="nav nav-pills">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="listado.html">Directorio</a></li>
                        {/* TODO Generar el listado */}
                        <li><a href="terminos.html">Terminos y Condiciones</a></li>
                        {/* TODO Generar Los Terminos y condiciones */}
                        <li><a href="contacto.html">Contacto</a></li>
                        {/* TODO Generar la hoja de contacto */}
                      </ul>
                      {/* /.nav */}
                    </div>
                    {/* /.footer-bottom-right */}
                  </div>
                  {/* /.container */}
                </div>
              </footer>
              {/* /.footer */}
      </div>
    );
  }
});

module.exports = Mainpage;
