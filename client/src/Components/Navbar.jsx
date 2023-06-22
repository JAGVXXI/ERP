import React, { useEffect } from "react";
import { Link} from "react-router-dom";
import imagenLogo from "../Images/logo2.png";
//import '../hojas-de-estilo/Testimonio.css';

function Navbar() {
  const [esUsuario, setEsUsuario] = React.useState(false);
  const [nombreUsuario, setNombreUsuario] = React.useState("");
  //const history = useHistory();

  useEffect(() => {
    //Hacemos unas solicitud al servidor para obtener los datos del usuario
    fetch("http://localhost:5000/user", {
      credentials: "include", //Incluimos las cookies para que el servidor pueda identificar al usuario
    })
      .then((res) => res.json())
      .then((data) => {
        //Actualizamos el estado con los datos del usuario
        setEsUsuario(true);
        setNombreUsuario(data.username);
        console.log(data.username);
      })
      .catch((err) => {
        //Si hay un error, asumir que el usuario no está logueado
        setEsUsuario(false);
      });
  }, []);

  /* const handleLogout = () => {
    //Hacemos una solicitud al servidor para cerrar la sesión
    fetch("http://localhost:5000/logout", {
      credentials: "include", //Incluimos las cookies para que el servidor pueda identificar al usuario
    })
    .then((res) => res.json())
    .then((data) => {
      //Actualizamos el estado con los datos del usuario
      setEsUsuario(false);
      setNombreUsuario("");
      console.log(data.username);
      history.push("/Login");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }; */

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid"
      data-bs-theme="dark"
    >
      <div className="container">
        <Link to="/" className=" navbar-brand" aria-current="page">
          <img
            className="imLogo"
            src={imagenLogo}
            alt="logo equipo"
            width="70px"
          />{" "}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />

          <button className="btn btn-outline-light" type="submit">
            Search
          </button>
        </form>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <div className=" nav-link btn-group">
              <a
                className=" btn btn-dark dropdown-toggle pt-0"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categorias
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
            {/*Aquí renderizamos el nombre del usuario si está logueado*/}
            {esUsuario ? (
              <div>
              <div className="navbar-brand">Bienvenido {nombreUsuario}</div>
              {/* //Button para cerrar sesión
              <button className="btn btn-dark" onClick={handleLogout}> Cerrar sesión </button> */}
              </div>
            ) : (
              <>
                <Link
                  to="/SignUp"
                  className="nav-link active"
                  aria-current="page"
                >
                  | Crear cuenta
                </Link>
                <Link
                  to="http://localhost:5000/login"
                  className="nav-link active"
                  aria-current="page"
                >
                  | Ingresar
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
