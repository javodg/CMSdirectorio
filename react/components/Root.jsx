var React = require('react');

var Root = React.createClass({
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
                        <a href="#">Vox Media<i className="fa fa-chevron-down" /></a>
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
          {this.props.children}
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

module.exports = Root;
