import { Link } from "react-router-dom";
import img from "../image/portada.jpg"
import "../css/Home.css"

const Home = () => {
    return (
      <>
        <section className="py-5 header">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-6 align-self-center">
                <h1 className="mb-4 ">
                  Somos expertos en
                  <span className="text-primary font-weight-bold">
                    {" "}
                    saber que quieres y como lo quieres
                  </span>
                </h1>
                <p className="lead text-muted mb-4">
                ¡Bienvenidos a nuestra tienda online! Si buscas una experiencia de compra única y satisfactoria, no busques más. Nuestra tienda ofrece una amplia selección de productos de alta calidad a precios competitivos. 
                </p>
                <div className="mb-5">
                  <Link to="#" className="btn btn-primary mr-2 mb-3 sombra">
                    lista de productos
                  </Link>
                  <Link to="#" className="btn btn-secondary mb-3 sombra">
                    Ver portafolio
                  </Link>
                </div>
                <div>
                  <ul className="list-inline">
                    <li className="list-inline-item mr-4">
                    <i className="fab fa-facebook lead"></i>
                      Facebook
                    </li>
                    <li className="list-inline-item mr-4">
                    <i className="fab fa-instagram lead"></i>
                      Instagram
                    </li>
                    <li className="list-inline-item mr-">
                    <i className="fab fa-whatsapp lead"></i>
                      Windows
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 iPhone">
                <img src={img} alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-image-x py-5 d-flex bg-dark">
          <div className="container align-self-center">
            <div className=" w-75 text-center mx-auto mb-5">
              <h2 className="text-white">
                desde la comodidad de tu casa{" "}
                <span className="text-primary font-weight-bold">
                  {" "}
                  a un solo click
                </span>
              </h2>
              <p className="lead text-white">
              "Te invitamos a descubrir una experiencia de compra única en nuestra tienda online. Con una amplia selección de productos de alta calidad y las últimas tendencias en moda y tecnología, satisfacemos todos tus deseos y necesidades.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card bg-dark my-3 shadow-lg">
                  <div className="card-body">
                    <small className="text-primary font-weight-bold ">
                      30% de descuento
                    </small>
                    <h2 className="font-weight-bold mb-4 text-white">MODA</h2>
                    <p className="text-white mb-3">
                    Sumérgete en un mundo de estilo y elegancia con nuestra exclusiva colección de ropa. 
                    </p>
                    <ul className="list-unstyled">
                      <li className="list-inline-item text-white mb-2">
                        <i className="far fa-check-circle mr-3" ></i>Rora para Mujere
                      </li>
                      <li className="list-inline-item text-white mb-2">
                        <i className="far fa-check-circle mr-3" ></i>Hombres
                        
                      </li>
                      <li className="list-inline-item text-white ">
                        <i className="far fa-check-circle mr-3"></i>Niños       
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer pb-4">
                    <Link to="" className="btn btn-primary w-100 sombra">
                      lista de productos
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card bg-dark my-3 shadow-lg">
                  <div className="card-body">
                    <small className="text-primary font-weight-bold">
                      30% de descuento
                    </small>
                    <h2 className="font-weight-bold mb-4 text-white">TECNOLOGIA</h2>
                    <p className="text-white mb-3">
                    Descubre un universo de innovación y funcionalidad en nuestros productos tecnológicos. 
                    </p>
                    <ul className="list-unstyled">
                      <li className="list-inline-item text-white mb-2">
                        <i className="far fa-check-circle mr-3"></i>Monitores
                      </li>
                      <li className="list-inline-item text-white mb-2">
                        <i className="far fa-check-circle mr-3"></i>Discos Duros
                      </li>
                      <li className="list-inline-item text-white">
                        <i className="far fa-check-circle mr-3"></i>Graficas
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer pb-4">
                    <Link to="" className="btn btn-primary w-100 sombra">
                      lista de productos
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card bg-dark my-3 shadow-lg">
                  <div className="card-body">
                    <small className="text-primary font-weight-bold">
                      30% de descuento
                    </small>
                    <h2 className="font-weight-bold mb-4 text-white">ACCESORIOS</h2>
                    <p className="text-white mb-3">
                    Enriquece tu estilo personal y realza cualquier atuendo con nuestros elegantes accesorios. 
                    </p>
                    <ul className="list-unstyled">
                      <li className="list-inline-item text-white mb-2">
                        <i className="far fa-check-circle mr-3"></i>Pulsera

                      </li>
                      <li className="list-inline-item text-white mb-2">
                        <i className="far fa-check-circle mr-3"></i>manillas
                        
                      </li>
                      <li className="list-inline-item text-white">
                        <i className="far fa-check-circle mr-3"></i>Anillos,Aretes
                        
                      </li>
                    </ul>
                  </div>
                  <div className="card-footer pb-4">
                    <Link to="" className="btn btn-primary w-100 sombra">
                      Lista de productos
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-image d-flex">
          <div className="container align-self-center">
            <div className=" w-75 text-center mx-auto my-5">
              <h2>
                Los Servicios de nuestra{" "}
                <span className="text-primary font-weight-bold">
                  {" "}
                  agencia digital
                </span>
              </h2>
              <p className="lead text-muted">
              Nuestra tienda online se compromete a ofrecer una experiencia de compra completa y satisfactoria, respaldada por una amplia selección de productos, un servicio al cliente excepcional y la comodidad de comprar desde cualquier lugar en cualquier momento.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card my-3 shadow-lg">
                  <div className="card-body">
                    <div className="icon-container d-flex bg-primary rounded-circle mb-2">
                      <i className="fas fa-certificate align-self-center lead mx-auto"></i>
                    </div>
                    <h5 className="font-weight-bold">VARIDAD</h5>
                    <small className="text-muted d-block mb-3">
                    Amplia selección de productos: Contamos con una extensa variedad de productos de alta calidad en diferentes categorías, desde moda y electrónica hasta hogar y belleza, para satisfacer todas las necesidades de nuestros clientes.
                    </small>
                    <Link to="" className="font-weight-bold">
                      Conoce mas
                      <i className="fas fa-arrow-right  text-primary ml-2 "></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card my-3 shadow-lg">
                  <div className="card-body">
                    <div className="icon-container d-flex bg-primary rounded-circle mb-2">
                      <i className="fas fa-certificate align-self-center lead mx-auto"></i>
                    </div>
                    <h5 className="font-weight-bold">USABILIDAD</h5>
                    <small className="text-muted d-block mb-3">
                    Navegación intuitiva: Diseñamos una interfaz fácil de usar y amigable que permite a los usuarios explorar nuestros productos de manera eficiente, con opciones de búsqueda y filtros para encontrar exactamente lo que desean.
                    </small>
                    <Link to="" className="font-weight-bold">
                      Conoce mas
                      <i className="fas fa-arrow-right  text-primary ml-2 "></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card my-3 shadow-lg">
                  <div className="card-body">
                    <div className="icon-container d-flex bg-primary rounded-circle mb-2">
                      <i className="fas fa-certificate align-self-center lead mx-auto"></i>
                    </div>
                    <h5 className="font-weight-bold">EXPERIENCIA</h5>
                    <small className="text-muted d-block mb-3">
                    Atención al cliente personalizada: Nuestro equipo de atención al cliente está disponible para ayudar a los clientes en cada paso del proceso de compra, brindando asesoramiento y resolviendo cualquier duda o inquietud que puedan tener.
                    </small>
                    <Link to="" className="font-weight-bold">
                      Conoce mas
                      <i className="fas fa-arrow-right  text-primary ml-2 "></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-dark-3 d-flex py-5">
          <div className="container align-self-center">
            <div className="card bg-dark sombra">
              <div className="card-body p-5">
                <h3 className="font-weight-bold text-primary">contactenos</h3>
                <p className="text-white mb-4">
                Nos encantaría escucharte. Si tienes alguna pregunta, sugerencia o necesitas asistencia, no dudes en ponerte en contacto con nosotros.
                </p>
                <form>
                  <div className="row">
                    <div className="col-12 col-md-3 my-3">
                      <input
                        type="text"
                        className="form-control sombra"
                        placeholder="nombre"
                      />
                    </div>
                    <div className="col-12 col-md-3 my-3">
                      <input
                        type="text"
                        className="form-control sombra"
                        placeholder="apellido"
                      />
                    </div>
                    <div className="col-12 col-md-3 my-3">
                      <input
                        type="text"
                        className="form-control sombra"
                        placeholder="telefono"
                      />
                    </div>
                    <div className="col-12 col-md-3 my-3">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 sombra"
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-dark py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <p className="mb-0 text-white">
                    Recuerda que estamos aquí para ti en cada paso del camino. Esperamos verte nuevamente pronto, para seguir compartiendo momentos emocionantes juntos. ¡Vuelve pronto y vive otra experiencia inolvidable en nuestra tienda online!"
                    </p>
                </div>
                <div className="col-lg-6 text-right mt-3">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item mr-3 text-white"><i className="fab fa-facebook lead"></i></li>
                        <li className="list-inline-item mr-3 text-white"><i className="fab fa-instagram lead"></i></li>
                        <li className="list-inline-item text-white"><i className="fab fa-whatsapp lead"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
      </>
    );
}
 
export {Home};