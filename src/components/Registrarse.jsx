import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hook/useFrom";


const Registrarse = () => {

    const navigate = useNavigate()

    const{name,email,password,onInputChange,onResetForm}=
    useForm({
        name:"",
        email:"",
        password:"",
    })

    const onRegister = (e)=>{
        e.preventDefault()


        navigate("/home",{
            replace: true,
            state: {
                logged: true,
                name,
            }
        })

        onResetForm();

    }




    return ( 
        <>
        <div className="container mt-5 pt-5">
          <div className="row">
            <div className="col-12 col-sm-7 col-md-6 m-auto">
              <div className="card border-0 shadow">
                <div className="card-body">
                  <svg
                    className="mx-auto my-3 bi bi-person-circle"
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                    />
                  </svg>
                  <form onSubmit={onRegister}>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={onInputChange}
                      required
                      className="form-control my-4 py-2"
                      placeholder="Username"
                    />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={onInputChange}
                      required
                      className="form-control my-4 py-2"
                      placeholder="email"
                    />

                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={onInputChange}
                      className="form-control my-4 py-2"
                      placeholder="Password"
                    />
                    <div className="text-center mt-3">
                      <button className="btn btn-primary">Registrate</button>
                      <Link to="#" className="nav-link">
                        Already have an account ?
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
     );
}
 
export {Registrarse};