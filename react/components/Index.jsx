var React = require('react');

var Index = React.createClass({
  render: function() {
    return (
      <div className="main-inner">
        <div className="content">
          <div className="mt-150">
            <div className="hero-image">
              <div className="hero-image-inner" style={{backgroundImage: 'url("images/cafe.jpg")'}}>
                <div className="hero-image-content">
                  <div className="container">
                    <h1>EneMedios</h1>
                      <p>Encuentra el negocio, producto o servicio que necesitas.<br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit, </p>
                    <a href="listing-row.html" className="btn btn-primary btn-lg">Ver el directorio</a>
                    <a href="listing-submit.html" className="btn btn-secondary btn-lg">Submit</a>
                  </div>{/* /.container */}
                </div>{/* /.hero-image-content */}
                <div className="hero-image-form-wrapper">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4 col-sm-offset-8 col-lg-4 col-lg-offset-7">
                        <form method="get" action="?">
                          <h2>¿Que buscaremos hoy?</h2>
                          <div className="hero-image-keyword form-group">
                            <input type="text" className="form-control" placeholder="Negocio, Producto o Servicio" />
                          </div>{/* /.form-group */}
                          <div className="hero-image-location form-group">
                            <select className="form-control" title="Categoria">
                              <option>El Menu</option>
                              <option>Reparacion</option>
                              <option>Escuelas</option>
                              <option>Otras categorias</option>
                            </select>
                          </div>{/* /.form-group */}
                          <button type="submit" className="btn btn-primary btn-block">Search</button>
                        </form>
                      </div>{/* /.col-* */}
                    </div>{/* /.row */}
                  </div>{/* /.container */}
                </div>{/* /.hero-image-form-wrapper */}
              </div>{/* /.hero-image-inner */}
            </div>{/* /.hero-image */}
          </div>
          <div className="container">
            <div className="page-header">
              <h1>Ultimas promociones</h1>
              <p>Estas son las promociones de nuestros anunciantes.</p>
            </div>
            {/* TODO Aqui iran las promociones o algo especial para que se vea primero */}
            {/* /.page-header */}
            {/* TODO Investigar si esta es una forma adecuado de poner promociones */}
            <div className="cards-wrapper">
              <div className="row">
                <div className="col-sm-8">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="card" data-background-image="assets/img/tmp/product-7.jpg">
                        <div className="card-label">
                          <a href="listing-detail.html">Coffe</a>
                        </div>
                        {/* /.card-label */}
                        <div className="card-content">
                          <h2><a href="listing-detail.html">Brazilian Coffe Taste</a></h2>
                          <div className="card-meta">
                            <i className="fa fa-map-o" /> 347/26 22th Avenue, NYC USA
                          </div>
                          {/* /.card-meta */}
                          <div className="card-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          {/* /.card-rating */}
                          <div className="card-actions">
                            <a href="#" className="fa fa-bookmark-o" />
                            <a href="listing-detail.html" className="fa fa-search" />
                            <a href="#" className="fa fa-heart-o" />
                          </div>
                        </div>
                        {/* /.card-content */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.col-* */}
                  </div>
                  {/* /.row */}
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="card" data-background-image="assets/img/tmp/product-4.jpg">
                        <div className="card-label">
                          <a href="listing-detail.html">Restaurant</a>
                        </div>
                        {/* /.card-label */}
                        <div className="card-content">
                          <h2><a href="listing-detail.html">Coffee &amp; Newspaper</a></h2>
                          <div className="card-meta">
                            <i className="fa fa-map-o" /> 347/26 22th Avenue, NYC USA
                          </div>
                          {/* /.card-meta */}
                          <div className="card-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          {/* /.card-rating */}
                          <div className="card-actions">
                            <a href="#" className="fa fa-bookmark-o" />
                            <a href="listing-detail.html" className="fa fa-search" />
                            <a href="#" className="fa fa-heart-o" />
                          </div>
                        </div>
                        {/* /.card-content */}
                      </div>
                      {/* /.card */}
                    </div>
                    <div className="col-sm-6">
                      <div className="card" data-background-image="assets/img/tmp/product-2.jpg">
                        <div className="card-label">
                          <a href="listing-detail.html">Vacation</a>
                        </div>
                        {/* /.card-label */}
                        <div className="card-content">
                          <h2><a href="listing-detail.html">Homemade Coffee</a></h2>
                          <div className="card-meta">
                            <i className="fa fa-map-o" /> 347/26 22th Avenue, NYC USA
                          </div>
                          {/* /.card-meta */}
                          <div className="card-rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          {/* /.card-rating */}
                          <div className="card-actions">
                            <a href="#" className="fa fa-bookmark-o marked" />
                            <a href="listing-detail.html" className="fa fa-search" />
                            <a href="#" className="fa fa-heart-o" />
                          </div>
                        </div>
                        {/* /.card-content */}
                      </div>
                      {/* /.card */}
                    </div>
                    {/* /.col-* */}
                  </div>
                  {/* /.row */}
                </div>
                {/* /.col-* */}
                <div className="col-sm-4">
                  <div className="card card-tall" data-background-image="assets/img/tmp/product-1.jpg">
                    <div className="card-label">
                      <a href="listing-detail.html">Vacation</a>
                    </div>
                    {/* /.card-label */}
                    <div className="card-content">
                      <h2><a href="listing-detail.html">Trip to Paris, France</a></h2>
                      <div className="card-meta">
                        <i className="fa fa-map-o" /> 347/26 22th Avenue, NYC USA
                      </div>
                      {/* /.card-meta */}
                      <div className="card-rating">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                      </div>
                      {/* /.card-rating */}
                      <div className="card-actions">
                        <a href="#" className="fa fa-bookmark-o" />
                        <a href="listing-detail.html" className="fa fa-search" />
                        <a href="#" className="fa fa-heart-o marked" />
                      </div>
                    </div>
                    {/* /.card-content */}
                  </div>
                  {/* /.card */}
                </div>
                {/* /.col-* */}
              </div>
              {/* /.row */}
            </div>
            {/* /.cards-wrapper */}
            <div className="block background-white fullwidth">
              <div className="page-header">
                <h1>Testimonios</h1>
                <p>Escuche lo que nuestros clientes dicen acerca de nuestros servicios.
                  <br /> Para conocer mas puede contactarnos<a href="#">Contacto</a>.</p>
              </div>
              {/* /.page-header */}
              <div className="row">
                <div className="col-sm-6">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src="assets/img/tmp/agent-1.jpg" alt />
                    </div>
                    {/* /.testimonial-image */}
                    <div className="testimonial-inner">
                      <div className="testimonial-title">
                        <h2>Exactamente lo que buscaba</h2>
                        <div className="testimonial-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* /.testimonial-rating */}
                      </div>
                      {/* /.testimonial-title */}
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      <div className="testimonial-sign">- Javier Diaz</div>
                      {/* /.testimonial-sign */}
                    </div>
                    {/* /.testimonial-inner */}
                  </div>
                  {/* /.testimonial */}
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src="assets/img/tmp/agent-2.jpg" alt />
                    </div>
                    {/* /.testimonial-image */}
                    <div className="testimonial-inner">
                      <div className="testimonial-title">
                        <h2>Muy buen servicio</h2>
                        <div className="testimonial-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* /.testimonial-rating */}
                      </div>
                      {/* /.testimonial-title */}
                      Me pagaron con croquetas por decir esto.
                      <div className="testimonial-sign">- Lila Diaz</div>
                      {/* /.testimonial-sign */}
                    </div>
                    {/* /.testimonial-inner */}
                  </div>
                  {/* /.testimonial */}
                </div>
                {/* /.col-* */}
                <div className="col-sm-6">
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src="assets/img/tmp/agent-4.jpg" alt />
                    </div>
                    {/* /.testimonial-image */}
                    <div className="testimonial-inner">
                      <div className="testimonial-title">
                        <h2>Ya no se que mas puedo decir al respecto.</h2>
                        <div className="testimonial-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* /.testimonial-rating */}
                      </div>
                      {/* /.testimonial-title */}
                      Ya me dio sueño.
                      <div className="testimonial-sign">- Javier Diaz</div>
                      {/* /.testimonial-sign */}
                    </div>
                    {/* /.testimonial-inner */}
                  </div>
                  {/* /.testimonial */}
                  <div className="testimonial last">
                    <div className="testimonial-image">
                      <img src="assets/img/tmp/agent-3.jpg" alt />
                    </div>
                    {/* /.testimonial-image */}
                    <div className="testimonial-inner">
                      <div className="testimonial-title">
                        <h2>Mejor directorio, encontre el santo grial con el</h2>
                        <div className="testimonial-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        {/* /.testimonial-rating */}
                      </div>
                      {/* /.testimonial-title */}
                      No mas busquedas sin sentido del Santo Grial
                      <div className="testimonial-sign">- Curadito</div>
                      {/* /.testimonial-sign */}
                    </div>
                    {/* /.testimonial-inner */}
                  </div>
                  {/* /.testimonial */}
                </div>
                {/* /.col-* */}
              </div>
            </div>
            {/* TODO Aqui iran las categorias */}
            <div className="block background-secondary fullwidth mt80 mb-80 pt60 pb60">
              <div className="row">
                <div className="col-sm-12">
                  <div className="contact-info-wrapper">
                    <h2>Alguna Pregunta?</h2>
                    <div className="contact-info">
                      <span className="contact-info-item">
                        <i className="fa fa-at" />
                        <span>javodg@gmail.com.com</span>
                      </span>
                      {/* /.contact-info-item */}
                      <span className="contact-info-item">
                        <i className="fa fa-phone" />
                        <span>59387742</span>
                      </span>
                      {/* /.contact-info-item */}
                    </div>
                    {/* /.contact-info*/}
                  </div>
                  {/* /.contact-info-wrapper */}
                </div>
                {/* /.col-* */}
              </div>
              {/* /.row */}
            </div>
          </div>
          {/* /.container */}
        </div>
        {/* /.content */}
      </div>
    );
  }
});

module.exports = Index;
