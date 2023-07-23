import { Link } from "react-router-dom";

const Paginacion = ({productsForPage,totalProducts,currentPage,setCurrentPage}) => {


    const pageNumber = []
    console.log()
    for(let i = 1;i <=Math.ceil(totalProducts/productsForPage);i++ ){
        pageNumber.push(i)
    }


    const onPreviusPage = ()=>{
        setCurrentPage (currentPage -1)
    }

    const onNextPage = ()=>{
        setCurrentPage(currentPage +1)
    }

    const onSpecificPage = (n) => {
        setCurrentPage(n)
    }


    return (
      <>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <Link className="page-link" href="#" tabIndex="" aria-disabled="true" onClick={onPreviusPage}>
                Anterior
              </Link>
            </li>

            {
                pageNumber.map(noPage => (
                    <li className="page-item" key={noPage}>
                    <Link className={`page-link ${noPage === currentPage ? 'active':''}`} to="#" onClick={()=> onSpecificPage(noPage)}>
                      {noPage}
                    </Link>
                  </li>
                )) 
            }

            <li className="page-item">
              <Link className={`page-link ${currentPage >= pageNumber.length ? 'disabled' : ''}`} href="#" onClick={onNextPage}>
                Siguiente
              </Link>
            </li>
          </ul>
        </nav>
      </>
    );
}
 
export  {Paginacion};