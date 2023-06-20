import React from 'react';
//import Prueba from '../Components/Prueba'
import CompShowUser from '../Components/usuarios'
import { Link } from "react-router-dom";


import '../css/Login.css';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export const Admin = () => 

<div className="PLogin">
    <header>
        
        <Navbar/>
    </header>

    <div className="container  py-5" id="conPrin">

        <CompShowUser/>
        <Link to="http://localhost:5000/perfil" className="btn btn-warning mt-2 mb-2">per</Link>
        <Link to="http://localhost:5000/logout" className="btn btn-warning mt-2 mb-2">Serrar S</Link>
        <Link to="http://localhost:5173/InsertProducts" className="btn btn-warning mt-2 mb-2">Crear productos</Link>
        <Link to="http://localhost:5173/Admin/create/Company" className="btn btn-warning mt-2 mb-2">Crear empresa</Link>
        <Link to="http://localhost:5173/UserA" className="btn btn-warning mt-2 mb-2">UsuarioA</Link>
        

    </div>

    <footer>
        <Footer/>
    </footer>

</div>