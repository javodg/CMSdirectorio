var React = require('react');

var Navbar = React.createClass({
  render: function () {
    return (
      <header className="header header-transparent">
       <div className="header-wrapper">
        <div className="container">
         <div className="header-inner">
          <div className="header-logo">
           <a href="index.html">
            <img src="assets/img/logo.png" alt="Logo" width="70 px" height="65px" />
           </a>
          </div>
          <div className="header-content">
           <div className="header-bottom">
            <div className="header-action">
             <a href="/nuevonegocio/" className="header-action-inner" title="Agregar Nuevo Negocio" data-toggle="tooltip" data-placement="bottom">
              <i className="fa fa-plus"></i>
             </a>
            </div>
            <ul className="header-nav-primary nav nav-pills collapse navbar-collapse">
             <li className="active">
              <a href="#">Inicio</a>
             </li>
             <li>
              <a href="directorio.html">Directorio</a>
             </li>
             <li className="has-mega-menu ">
              <a href="#">EneMedios <i className="fa fa-chevron-down"></i></a>
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
                 <li><a href="#">Otros</a></li>
                 <li><a href="#">Enseñanza</a></li>
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
                 <a href="register.html">Unete a <br/>Nosotros</a>
                </div>
               </li>
              </ul>
             </li>
             <li><a href="login.html">Ingresar</a></li>
             <li><a href="signup.html">Inscribirte</a></li>
             <li><a href="contacto/">Contacto </a></li>
            </ul>
            <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target=".header-nav-primary">
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
            </button>
           </div>
          </div>
         </div>
        </div>
       </div>
      </header>
    );
  }
});

module.exports = Navbar;
