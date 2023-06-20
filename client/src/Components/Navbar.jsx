import React from 'react'
import {Link} from 'react-router-dom'
import imagenLogo from '../Images/logo2.png';
//import '../hojas-de-estilo/Testimonio.css';

function Navbar(){
    return(
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid"  data-bs-theme="dark">
            <div className="container">
                
                    
            <Link to="/" className=" navbar-brand" aria-current="page" ><img className='imLogo' src={imagenLogo} alt='logo equipo' width="70px" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

            
                <form className="d-flex" role="search">
                    
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    
                    
                    <button className="btn btn-outline-light" type="submit">Search</button>
                </form>
                <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                    
                    <div className="navbar-nav ms-auto"> 
                        
                        <div className=" nav-link btn-group">
                            <a  className=" btn btn-dark dropdown-toggle pt-0" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                Categorias
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                        
                        <Link to="/SignUp" className="nav-link active" aria-current="page">| Crear cuenta</Link> 
                        <Link to="http://localhost:5000/login" className="nav-link active" aria-current="page">| Ingresar</Link> 

                    </div>

                </div>
               
                
            </div>
        </nav>
        

    );
}

export default Navbar;