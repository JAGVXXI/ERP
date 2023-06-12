import React from 'react';
//import Prueba from '../Components/Prueba'
import CompShowUser from '../Components/usuarios'

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
    </div>

    <footer>
        <Footer/>
    </footer>

</div>