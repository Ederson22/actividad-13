import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Login } from "./Login";
import { Registrarse } from "./Registrarse";
import { Home } from "./Home";
import { Productos } from "./Productos";
import { ProductoDetalle } from "./ProductoDetalle";
import "../css/App.css"


function App() {
  const { state } = useLocation();
  console.log(state)
  const navigate = useNavigate()


  const onLogot =()=>{
    navigate("/",{
      replace: true
    }
    
    )    
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="">
          Mercado express
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {state?.logged ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link mr-3" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mr-3" to="/productos">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link font-weight-bold text-light" to="" onClick={onLogot}>
                    Cerrar sesion
                  </Link>
                </li>
                <li className="nav-item mr-3">
                  <Link className="nav-link" to="">
                    {state?.name}
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link mr-3" to="/">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mr-3" to="/registrarse">
                    Registrarse
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/registrarse" element={<Registrarse />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/productos" element={<Productos/>}></Route>
        <Route path="/productos/:prodID" element={<ProductoDetalle/>}></Route>
      </Routes>
    </>
  );
}

export default App;
