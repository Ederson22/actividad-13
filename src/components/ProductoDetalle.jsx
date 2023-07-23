import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/ProductoDetalle.css";

const ProductoDetalle = () => {
  const { prodID } = useParams();
  const [ListadoProductos, setListadoProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((Listado) => Listado.json())
      .then((Listado) => {
        setListadoProductos(Listado);
      });
  }, []);

  const prodinfo = ListadoProductos.find(
    (product) => product.id === parseInt(prodID)
  );

  if (!prodinfo) {
    return;
  } else {
    return (
      <div className="card mt-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={prodinfo.image} class="img-fluid rounded-start" alt={prodinfo.title}/>
        </div>
        <div className="col-md-8 text">
          <div className="card-body">
            <h5 className="card-title  title ">{prodinfo.title}</h5>
            <p className="card-text">{prodinfo.category}</p>
            <p className="card-text">{prodinfo.description}</p>
            <p className="card-text">{prodinfo.description}</p>
            <p className="card-text">${prodinfo.price}</p>
            <button className="btn btn-dark button">comprar</button>
          </div>
        </div>
      </div>
    </div>

    );
  }
};

export { ProductoDetalle };
