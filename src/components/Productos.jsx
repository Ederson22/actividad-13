import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Productos.css"
import { Paginacion } from "./Paginacion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'




const Productos = () => {

        const [products, setProducts] = useState([]);
       

        // const totalProducts = products.length

        const [productsForPage,setProductsForPage] = useState(3)
        const [currentPage,setCurrentPage] = useState(1)

        const lastIndex = currentPage * productsForPage
        const firstIndex = lastIndex - productsForPage


        
        // useEffect(() => {
        //   fetch("https://fakestoreapi.com/products")
        //   .then((Listado) => Listado.json())
        //   .then((Listado) => {
        //     setProducts(Listado);
            
            
        //   });
        // }, []);


        const [searchTerm, setSearchTerm] = useState('')

        useEffect(() => {
          fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => {
              setProducts(data);
            })
            .catch((error) => {
              console.error('Error fetching data:', error);
            });
        }, []);

        const handleSearchChange = (event) => {
          setSearchTerm(event.target.value);
        };

        const filteredProducts = products.filter((product) => {
          return product.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        

        
    return (
      <>
        <div className="search-container search ">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Link className="icon" onClick={() => setSearchTerm("")}>
            <FontAwesomeIcon icon={faSearch}/>
          </Link>
        </div>
         <h1 className="">Lista De Productos</h1>

        <div className="container-products">
          {filteredProducts
            .map((prod) => (
              <div className="card card-product" key={prod.id}>
                <figure className="container-img">
                  <img
                    src={prod.image}
                    className="card-img-top"
                    alt={prod.title}
                  />
                </figure>
                <div className="card-body info-product">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text price">{prod.price}</p>
                  <button>
                    <Link to={`/productos/${prod.id}`} className="enlace">
                      ver producto
                    </Link>
                  </button>
                </div>
              </div>
            ))
            .slice(firstIndex, lastIndex)}
        </div>
        <Paginacion
          productsForPage={productsForPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          // totalProducts = {totalProducts}
          totalProducts={filteredProducts.length}
        />
      </>
    );
}

 
export  {Productos};


